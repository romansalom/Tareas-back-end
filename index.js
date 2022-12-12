const array = []

class ProductManager{
    static id = 1;
    
     constructor(title , descriptions , price , thumbnail , code , stock , id){
        this.title = title,
        this.descriptions= descriptions,
         this.price = price,
        this.thumbnail = thumbnail ,
        this.code =code ,
        this.stock = stock,
        ProductManager.id;
     }
   
    
addProduct(){

    const productos = {
       
        title : this.title,
        descriptions: this.descriptions,
        price : this.price ,
        thumbnail : this.thumbnail,
        code :  this.code,
        stock : this.stock,
        id : ProductManager.id,
        
        }
       
       
    ProductManager.id + 1
        array.push({productos});
        
    }
    
}


let producto1 = new ProductManager("regla" , "30 cm" , 50 , "www.regla.com" , 1323 , 23 );


producto1.addProduct();
let producto2 = new ProductManager("escuadra" , "triangular" , 12, "www.escuadra.com" , 1323 , 12);
producto2.addProduct();
    

console.log(array);