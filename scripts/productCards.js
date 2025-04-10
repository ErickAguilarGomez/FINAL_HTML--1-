import products from "./products.js";
function createCard(product) {
  return `
             <a class="product-card" href="./details.html?id=${product.id}">
            <img
              class="product-img"
              src="${product.images[0]} "
              alt="${product.title} "
            />
            <div class="product-info">
              <span class="product-title">${product.title}</span>
              <span class="product-description">${product.colors[0]}</span>
              <div class="product-price-block">
                <span class="product-price">${product.price}</span>
                <span class="product-discount">${product.onsale} Off</span>
              </div>
              <div class="product-tax-policy">
                Incluye impuesto País y percepción AFIP
              </div>
            </div>
          </a>
          `;
}

export function printCards(arrayOfProducts, idSelector) {
  let productsTemplate = "";
  for (const element of arrayOfProducts) {
    productsTemplate = productsTemplate + createCard(element);
  }
  const productsSelector = document.getElementById(idSelector);
  productsSelector.innerHTML += productsTemplate;
}
printCards(products, "products");
