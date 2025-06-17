const header = document.querySelector("header");
const cartIconNum = document.getElementById("cartIconNum");
const categoriesContainer = document.getElementById("categoriesContainer");
const homeSection = document.getElementById("homeSection");
const itemsContainer = document.getElementById("itemsContainer");
const template = document.querySelector("template");

let itemsCartStatus = {};
let categoryData = {};
let cartStatus = 0;

window.addEventListener("DOMContentLoaded", () => GenerateNav());
window.addEventListener("DOMContentLoaded", () => LoadCartStatus());
window.addEventListener("DOMContentLoaded", () => Sticky());
categoriesContainer.addEventListener("click", e => ChangeCategory(e.target.innerText));

function Sticky(){
    const navDiv = document.querySelector("nav").firstElementChild;
    if(navDiv.clientHeight < 0.90*window.innerHeight){
        navDiv.classList.add("sticky");
    }
}

async function AddClickedToCart(itemObject, category){
    try{
        let itemName = itemObject.querySelector("h3").innerText;
        let itemId = categoryData.products.find(el => el.name===itemName).id;
        itemsCartStatus = (await (await fetch(`/cart/add/${itemId}`, {method: "PUT"})).json());
        
        let cartNum = itemObject.querySelector(".cartNum");
        cartNum.innerText = itemsCartStatus[itemId][1];

        cartStatus = 0;
        for(let el of Object.values(itemsCartStatus)){
            cartStatus+=el[1];
        }
        cartIconNum.innerText = cartStatus;
        
        if(itemsCartStatus[itemId][1]>0){
            cartNum.style.display = "block";
        }
        if(cartStatus>0){
            cartIconNum.style.display = "block";
        }
    }
    catch{
        console.error("Couldn't add to cart");
    }
}

async function LoadCartStatus(){
    try{
        itemsCartStatus = (await (await fetch("/cart/getAll")).json());
        if(itemsCartStatus===null){
            throw(new Error("Couldn't fetch cart"));
        }
        cartStatus = 0;
        for(let el of Object.values(itemsCartStatus)){
            cartStatus+=el[1];
        }
        cartIconNum.innerText = cartStatus;
        if(cartStatus!==0){
            cartIconNum.style.display = "block";
        }
    }
    catch{
        console.error("Couldn't load cart data.");
    }
}

async function GenerateNav(){
    try{
        const cats = (await (await fetch("/home/getCategories")).json()).categories;
        for(let cat of cats){
            let elem = document.createElement("li");
            elem.innerText = cat;
            categoriesContainer.appendChild(elem);
        }
    }
    catch{
        console.error("Couldn't load server data");
    }
}

async function ChangeCategory(clickedCategory){
    categoryData = (await (await fetch(`/home/getProducts/${clickedCategory.toLowerCase()}`)).json()).category;

    homeSection.firstElementChild.src = categoryData.image;
    header.firstElementChild.firstElementChild.innerHTML = categoryData.name;

    itemsContainer.replaceChildren();
    for(let item of categoryData.products) {
        let elem = template.content.cloneNode(true).firstElementChild;
        let img = elem.querySelector(".itemImage");
        let name = elem.querySelector("h3");
        let cartNum = elem.querySelector(".cartNum");
        
        img.style.backgroundImage = `url(${item.image})`;
        name.innerText = item.name;
        if(itemsCartStatus[item.id]){
            cartNum.innerText = itemsCartStatus[item.id][1];
        }
        else{
            cartNum.innerText = 0;
            cartNum.style.display = "none";
        }

        elem.addEventListener("click", e => AddClickedToCart(e.target, clickedCategory));
        itemsContainer.appendChild(elem);
    }
    cartIconNum.innerText = cartStatus;
}
