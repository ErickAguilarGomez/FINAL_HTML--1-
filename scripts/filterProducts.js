import { printCards } from "./productCards.js";


const searchSelector = document.querySelector("#search");

function captureText(event) {
    const savedValue = event.target.value.toLowerCase();
    const filteredArray = products.filter(producto => 
         producto.title.toLowerCase().includes(savedValue)
    );
    return  savedValue.length != 0?printCards(filteredArray, "products"):printCards(products, "products");
}

searchSelector.addEventListener("keyup", captureText);
