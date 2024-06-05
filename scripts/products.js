class Product {
  constructor(id, title, price, stock, images, onsale,description,colors) {
    this.id = id;
    this.title = title;
    this.price = price;
    this.stock = stock;
    this.images = images;
    this.onsale = onsale;
    this.description=description
    this.colors=colors
  }
}
const prod1 = new Product(1,"Mackbook 12 pro max",1500,10,["assets/mock1.jpg","assets/mock2.jpg","assets/mock1.jpg"],10,"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Totam et voluptatem quia eum modi praesentium unde odit, neque laborum commodi alias repudiandae impedit sed iste vitae cupiditate! Odit, numquam vitae?",["blue","gray"]);
const prod2 = new Product(2,"Iphone 11 pro max",1500,10,["assets/mock1.jpg","assets/mock1.jpg","assets/mock1.jpg"],50,"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Totam et voluptatem quia eum modi praesentium unde odit, neque laborum commodi alias repudiandae impedit sed iste vitae cupiditate! Odit, numquam vitae?",["blue","gray"]);
const prod3 = new Product(3,"Ipad  pro max",1500,10,["assets/mock1.jpg","assets/mock1.jpg","assets/mock1.jpg"],60,"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Totam et voluptatem quia eum modi praesentium unde odit, neque laborum commodi alias repudiandae impedit sed iste vitae cupiditate! Odit, numquam vitae?",["blue","gray"]);
const prod4 = new Product(4,"CarlosBook 12 pro max",1500,10,["assets/mock1.jpg","assets/mock1.jpg","assets/mock1.jpg"],20,"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Totam et voluptatem quia eum modi praesentium unde odit, neque laborum commodi alias repudiandae impedit sed iste vitae cupiditate! Odit, numquam vitae?",["blue","gray"]);
const prod5 = new Product(5,"Cargador pro max",1500,10,["assets/mock1.jpg","assets/mock1.jpg","assets/mock1.jpg"],10,"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Totam et voluptatem quia eum modi praesentium unde odit, neque laborum commodi alias repudiandae impedit sed iste vitae cupiditate! Odit, numquam vitae?",["blue","gray"]);
const prod6 = new Product(6,"Mackbook 12 pro max",1500,10,["assets/mock1.jpg","assets/mock1.jpg","assets/mock1.jpg"],80,"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Totam et voluptatem quia eum modi praesentium unde odit, neque laborum commodi alias repudiandae impedit sed iste vitae cupiditate! Odit, numquam vitae?",["blue","gray"]);

 const products = [prod1, prod2, prod3, prod4,prod5,prod6];
 export default products;