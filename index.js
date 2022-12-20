const fs = require('fs');

const products = [];
class ProductManager{
    static id = 1;
   
    
     constructor(title , descriptions , price , thumbnail , code , stock , id ){
       this.products = [],
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
       
       


        const verificarCodigo = products.find(elemento => elemento.code === productos.code) 
           
       if (verificarCodigo)
       {
        throw new Error('hay codes iguales')  }
        else{
            ProductManager.id ++ 
            products.push(productos);
            
        }

       
    
    }

     getById(id){
        const products =this.getAll()
        if(!this.checkLength(products)){
            return
        }
        let productos = products.find(elemento => elemento.id == id)
        return productos ? productos : null
    }
    checkLength(arr){
        if (arr.length === 0){
            console.error('El array esta vacio')
            return false
        }
        return true
    }

   

    guardarCambios(){
        fs.writeFileSync('products.json' , JSON.stringify(this.products) ,addProduct() );
    }

    cargaDelArchivo(){
        readFile('products.json','utf-8', (err, data)=>{
            if (err) throw err;
            console.log(data)
            
            });
        }
    }

    console.log(fs.readFileSync("products.json",'utf-8'));



let producto1 = new ProductManager("regla" , "30 cm" , 50 , "www.regla.com" , 1100 , 23 );


producto1.addProduct();
let producto2 = new ProductManager("escuadra" , "triangular" , 12, "www.escuadra.com" , 100 , 12);
producto2.addProduct();
let producto3 = new ProductManager("lapiz" , "de color" , 11, "www.lapizdecolores.com" , 1200 , 6);
producto3.addProduct();
    



console.log(products);
