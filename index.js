const array = []

class ProductManager{

     constructor(title , descriptions , price , thumbnail , code , stock){
        this.title = title,
        this.descriptions= descriptions,
         this.price = price,
        this.thumbnail = thumbnail ,
        this.code =code ,
        this.stock = stock
     }
    
      
    
addProduct(){
    array.push({
        title : this.title,
        descriptions: this.descriptions,
        price : this.price ,
        thumbnail : this.thumbnail,
        code :  this.code,
        stock : this.stock
    })
}}


let producto1 = new ProductManager("regla" , "30 cm" , 50 , "www.regla.com" , 4543 , 23);
producto1.addProduct();
let producto2 = new ProductManager("escuadra" , "triangular" , 12, "www.escuadra.com" , 1323 , 12);
producto2.addProduct();
    

console.log(array)