const fs = require('fs');

const getProducts = [];

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
       
       



        const verificarCodigo = getProducts.find(elemento => elemento.code === productos.code) 
           
       if (verificarCodigo)
       {
        throw new Error('hay codes iguales')  }
        else{
            ProductManager.id ++ 
            getProducts.push(productos);
            
        }

       
    
    }

     getById(id){
        const obtenerproductos = JSON.parse(fs.readFileSync('productos.json', 'utf-8'));
        obtenerproductos.map((element)=>{ if(element.id == id)
            console.log(element) })

        
        
      
        
    }

    guardaEnArchivo(){
        try{
            fs.writeFileSync('productos.json', JSON.stringify(getProducts));
    
        }catch(err){
            throw new Error (err);
    
        }
    
    }
    cargarElArchivo(){
        try{
            
            const obtenerproductos = JSON.parse(fs.readFileSync('productos.json', 'utf-8'));
            console.log(obtenerproductos);
        }catch(err){
            throw new Error(err);
        }
     
    }
    
}




let producto1 = new ProductManager("regla" , "30 cm" , 50 , "www.regla.com" , 1100 , 23 );


producto1.addProduct();
let producto2 = new ProductManager("escuadra" , "triangular" , 12, "www.escuadra.com" , 100 , 12);
producto2.addProduct();
let producto3 = new ProductManager("lapiz" , "de color" , 11, "www.lapizdecolores.com" , 1200 , 6);

let producto4 = new ProductManager("computadora " , "roja" , 15, "www.lapizdecolores.com" , 12040 , 64)
producto4.addProduct();
producto4.guardaEnArchivo();
producto4.cargarElArchivo();

    producto4.getById(2);



