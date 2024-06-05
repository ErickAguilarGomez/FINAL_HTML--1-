const navSelector = document.querySelector("#navbar");
const footerSelector = document.querySelector("#footer");
const options = [
  {
    title: "Ofertas de la semana",
    linkTo: "./outlet.html",
    opts: ["Laptops", "Audio", "Auticulares"],
  },
  {
    title: "Cómo comprar",
    linkTo: "./how.html",
    opts: ["Formas de pago", "envios", "devoluciones"],
  },
  {
    title: "Costos y tarifas",
    linkTo: "./taxs.html",
    opts: ["Impuestos", "facturacion"],
  },
  {
    title: "Mis pedidos",
    linkTo: "./orders.html",
    opts: ["Pedir nuevamente", "Lista de deseos"],
  },
  { title: "Garantía", linkTo: "./warranty.html", opts: [] },
];

function createNavbar() {
  let template = "";
  options.forEach((item) => {
    template += `<li class="nav-li"> <a class="nav-a" href="${item.linkTo} ">${item.title} </a></li>`;
  });
  navSelector.innerHTML = template;
}
function createFooter() {
  let template = "";
  options.forEach((item) => {
    template += ` <ul class="footer-ul"> 
      <li class="footer-main-item">
      <a class="footer-a" href="${item.linkTo}">${item.title}</a>
      </li>
      `;

    item.opts.forEach((opt) => {
      template += `
        <li class="footer-li">
        <a class="footer-a" href="./index.html">${opt}</a>
        </li>
        `;
    });

    template += `
      </ul>  
      `;
  });

  footerSelector.innerHTML = template;
}

createNavbar();
createFooter();
