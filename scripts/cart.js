const cartIconNum = document.getElementById("cartIconNum");
const itemsTable = document.querySelector("tbody");
const emptyCartMessage = document.getElementById("emptyCartMessage");
const emptyAllBtn = document.getElementById("emptyAllBtn");
const template = document.querySelector("template");

let itemsCartStatus = {}
let cartStatus = 0;

function SetTable(){
    try{
        itemsCartStatus = JSON.parse(localStorage.getItem("cart"));
        if(itemsCartStatus===null){
            throw new Error("Invalid data.js");
        }
        UpdateCartData();
    }
    catch{
        itemsTable.parentElement.style.display = "none";
        emptyAllBtn.style.display = "none";
        emptyCartMessage.style.display = "block";
    }
}

function UpdateCartData(){
    itemsTable.replaceChildren();
    let inCart = Object.keys(itemsCartStatus).filter(el => itemsCartStatus[el]!=0);
    for(let item of inCart){
        let elem = template.content.cloneNode(true).firstElementChild;
        let name = elem.querySelectorAll("td")[0];
        let quantity = elem.querySelector(".quantity");
        let removeBtn = elem.querySelector(".removeItem");
        let addBtn = elem.querySelector(".addItem");

        name.innerText = item;
        quantity.innerText = itemsCartStatus[item];

        removeBtn.addEventListener("click", e => RemoveItem(e.target.parentElement.parentElement));
        addBtn.addEventListener("click", e => AddItem(e.target.parentElement.parentElement));
        itemsTable.appendChild(elem);
    }
    cartStatus = Object.values(itemsCartStatus).reduce((acc, val) => acc+val);
    if(cartStatus==0){
        itemsTable.parentElement.style.display = "none";
        emptyAllBtn.style.display = "none";
        emptyCartMessage.style.display = "block";
        cartIconNum.style.display = "none";
    }
    cartIconNum.innerText = cartStatus;
}

function RemoveItem(item){
    const name = item.firstElementChild.innerText
    if(itemsCartStatus[name]>0){
        itemsCartStatus[name]--;
    }
    item.querySelector(".quantity").innerText = itemsCartStatus[name];
    localStorage.setItem("cart", JSON.stringify(itemsCartStatus));
    UpdateCartData();
}

function AddItem(item){
    const name = item.firstElementChild.innerText
    if(itemsCartStatus[name]<Number.MAX_SAFE_INTEGER){
        itemsCartStatus[name]++;
    }
    item.querySelector(".quantity").innerText =itemsCartStatus[name];
    localStorage.setItem("cart", JSON.stringify(itemsCartStatus));
    UpdateCartData();
}

const emptyAllFun = function EmptyAll(){
    localStorage.removeItem("cart");
    SetTable();
}

window.addEventListener("DOMContentLoaded", () => SetTable());
emptyAllBtn.addEventListener("click", emptyAllFun);