const fs = require ('node:fs');

class ProductManager{
    static id = 1;
    productos;
    constructor (path,title , descriptions , price , thumbnail , code , stock , id ){
        this.path = path;
        this.cargarElArchivo();
        this.title = title,
        this.descriptions= descriptions,
         this.price = price,
        this.thumbnail = thumbnail ,
        this.code =code ,
        this.stock = stock,
        ProductManager.id;
}

agregarProductos(producto){
    const productos = {

        title : this.title,
        descriptions: this.descriptions,
        price : this.price ,
        thumbnail : this.thumbnail,
        code :  this.code,
        stock : this.stock,
        id : ProductManager.id,}
    
        
        const verificarCodigo = productos.find(elemento => elemento.code === productos.code) 
           
       if (verificarCodigo)
       {
        throw new Error('hay codes iguales')  }
        else{
            ProductManager.id ++ 
            productos.push(productos);
            
        }

        
}
getById(id){
    const producto =this.getAll()
    if(!this.checkLength(productos)){
        return
    }
    let productos = productos.find(elemento => elemento.id == id)
    return producto ? producto : null
}
checkLength(arr){
    if (arr.length === 0){
        console.error('El array esta vacio')
        return false
    }
    return true
}
guardaEnArchivo(){
    try{
        fs.writeFileSync(this.path, JSON.stringify(this.producto));

    }catch(err){
        throw new Error (err);

    }

}

cargarElArchivo(){
    try{
        this.productos = JSON.parse(fs.readFileSync(this.path, 'utf-8'));
    }catch(err){
        throw new Error(err);
    }
 
}
}

ProductManager = new ProductManager('productos.json');

let producto1 = new ProductManager("regla" , "30 cm" , 50 , "www.regla.com" , 1100 , 23 );


producto1.agregarProductos();
let producto2 = new ProductManager("escuadra" , "triangular" , 12, "www.escuadra.com" , 100 , 12);
producto2.agregarProductos();
let producto3 = new ProductManager("lapiz" , "de color" , 11, "www.lapizdecolores.com" , 1200 , 6);
producto3.agregarProductos();
    



console.log(ProductManager);