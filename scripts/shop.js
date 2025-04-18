const header = document.querySelector("header");
const cartIconNum = document.getElementById("cartIconNum");
const categoriesContainer = document.getElementById("categoriesContainer");
const homeSection = document.getElementById("homeSection");
const itemsContainer = document.getElementById("itemsContainer");
const template = document.querySelector("template");

let itemsCartStatus = {};
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

function AddClickedToCart(itemObject, category){
    let itemName = itemObject.querySelector("h3").innerText;
    if(itemsCartStatus[itemName]<Number.MAX_SAFE_INTEGER){
        itemsCartStatus[itemName]++;
        cartStatus++;
    }
    
    let cartNum = itemObject.querySelector(".cartNum");
    cartNum.innerText = itemsCartStatus[itemName];
    cartIconNum.innerText = cartStatus;
    if(itemsCartStatus[itemName]>0){
        cartNum.style.display = "block";
    }
    if(cartStatus>0){
        cartIconNum.style.display = "block";
    }
    localStorage.setItem("cart", JSON.stringify(itemsCartStatus));
}

function LoadCartStatus(){
    try{
        itemsCartStatus = JSON.parse(localStorage.getItem("cart"));
        if(itemsCartStatus===null){
            cartStatus = 0;
            itemsCartStatus = {};
            for(let cat of data.categories){
                for(item of cat.products){
                    itemsCartStatus[item.name] = 0;
                }
            }
        }
        for(let quantity of Object.values(itemsCartStatus)){
            cartStatus+=quantity;
        }
        cartIconNum.innerText = cartStatus;
        if(cartStatus==0){
            cartIconNum.style.display = "none";
        }
    }
    catch{
        console.error("Can't load cart status.");
    }
}

function GenerateNav(){
    const cats = data.categories.map(el => el.name);
    for(let cat of cats){
        let elem = document.createElement("li");
        elem.innerText = cat;
        categoriesContainer.appendChild(elem);
    }
}

function ChangeCategory(clickedCategory){
    const category = data.categories.find(el => el.name==clickedCategory);

    homeSection.firstElementChild.src = category.image;
    header.firstElementChild.firstElementChild.innerHTML = category.name;

    itemsContainer.replaceChildren();
    for(let item of category.products) {
        let elem = template.content.cloneNode(true).firstElementChild;
        let img = elem.querySelector(".itemImage");
        let name = elem.querySelector("h3");
        let cartNum = elem.querySelector(".cartNum");
        
        img.style.backgroundImage = `url(${item.image})`;
        name.innerText = item.name;
        cartNum.innerText = itemsCartStatus[name.innerText];
        if(itemsCartStatus[name.innerText]==0){
            cartNum.style.display = "none";
        }

        elem.addEventListener("click", e => AddClickedToCart(e.target, clickedCategory));
        itemsContainer.appendChild(elem);
    }
    cartIconNum.innerText = cartStatus;
}
