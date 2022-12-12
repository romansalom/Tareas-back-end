class ProductManager{
    products;
     constructor(title){
      this.products=[
        this.title = title,
        this.descriptions=[],
        this.price = [],
        this.thumbnail = [],
        this.code = [],
        this.stock = [],
      ]
    }

getTitle = () =>{
    return (`${this.title}`)
}
addDescription = (description) =>{
    this.descriptions.push(description)
}
addPrice = (prices) =>{
    this.price.push(prices)
}
addThumbnail = (thumbnails) =>{
    this.thumbnail.push(thumbnails)
}
addCode = (codes) =>{
    this.code.push(codes)
}
addStocks = (stocks) =>{
    this.stock.push(stocks)
    
}

getProducts = () =>{
    this.products.map(products => {
        return console.log(`${products.title}`)
    })
}
    }


let producto1 = new ProductManager("regla");
producto1.addDescription("30CM");
producto1.addCode("34432");
producto1.addPrice("100$");
producto1.addStocks("10");
producto1.addThumbnail("wwww.regla.com")

let producto2 = new ProductManager("escuadra");
producto2.addDescription("triangular");
producto2.addCode("5555");
producto2.addPrice("300$");
producto2.addStocks("30");
producto2.addThumbnail("wwww.escuadra.com")

console.log(producto1);
console.log(producto2);

