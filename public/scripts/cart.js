const cartIconNum = document.getElementById("cartIconNum");
const itemsTable = document.querySelector("tbody");
const emptyCartMessage = document.getElementById("emptyCartMessage");
const emptyAllBtn = document.getElementById("emptyAllBtn");
const template = document.getElementById("itemTempl");
const headerTmpl = document.getElementById("headerTempl");

let itemsCartStatus = {}
let cartStatus = 0;

async function SetTable(){
    try{
        itemsCartStatus = (await (await fetch("/cart/getAll")).json());
        if(itemsCartStatus===null){
            throw new Error("Couldn't fetch cart");
        }
        UpdateCartData();
    }
    catch{
        itemsTable.parentElement.style.display = "none";
        emptyAllBtn.style.display = "none";
        emptyCartMessage.style.display = "block";
        cartIconNum.style.display = "none";
    }
}

function UpdateCartData(){
    itemsTable.replaceChildren();
    const header = headerTmpl.content.cloneNode(true).firstElementChild;
    itemsTable.appendChild(header);
    for(let item of Object.values(itemsCartStatus)){
        let elem = template.content.cloneNode(true).firstElementChild;
        let name = elem.querySelectorAll("td")[0];
        let quantity = elem.querySelector(".quantity");
        let removeBtn = elem.querySelector(".removeItem");
        let addBtn = elem.querySelector(".addItem");
        
        name.innerText = item[0];
        quantity.innerText = item[1];
        
        removeBtn.addEventListener("click", e => RemoveItem(e.target.parentElement.parentElement));
        addBtn.addEventListener("click", e => AddItem(e.target.parentElement.parentElement));
        itemsTable.appendChild(elem);
    }

    cartStatus = 0;
    for (let el of Object.values(itemsCartStatus)) {
        cartStatus += el[1];
    }
    cartIconNum.innerText = cartStatus;

    if (cartStatus===0) {
        itemsTable.parentElement.style.display = "none";
        emptyAllBtn.style.display = "none";
        emptyCartMessage.style.display = "block";
        cartIconNum.style.display = "none";
    }
    else{
        cartIconNum.style.display = "block";
    }
}

async function RemoveItem(item){
    const name = item.firstElementChild.innerText
    let itemId = Object.keys(itemsCartStatus).find(el => itemsCartStatus[el][0]===name);
    itemsCartStatus = (await (await fetch(`/cart/remove/${itemId}`)).json());
    UpdateCartData();
}

async function AddItem(item){
    const name = item.firstElementChild.innerText
    let itemId = Object.keys(itemsCartStatus).find(el => itemsCartStatus[el][0]===name);
    itemsCartStatus = (await (await fetch(`/cart/add/${itemId}`)).json());
    UpdateCartData();
}

const emptyAllFun = async function EmptyAll(){
    await fetch("/cart/removeAll");
    cartStatus = 0;
    SetTable();
}

window.addEventListener("DOMContentLoaded", () => SetTable());
emptyAllBtn.addEventListener("click", emptyAllFun);