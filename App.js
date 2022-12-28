const express = require('express');
const fs = require('fs');
const {ProductManager}= require('./productManager');

const app = express();
const port = 8080;

app.get('/products', (req,res)=>{

    const obtenerproductos = JSON.parse(fs.readFileSync('productos.json', 'utf-8'));
    const title = req.query.title;

    res.send(obtenerproductos);
});
app.get('/products/:title', (req,res)=>{
    const title = req.query.title;
    const obtenerproductostitulo = JSON.parse(fs.readFileSync('productos.json', this.title ,'utf-8'));

    res.send(obtenerproductostitulo);
});
app.get('/products/:id', (req,res)=>{
    const id = req.query.id();
    

    res.send(obtenerproductosid.find(e => e.id === Number( req.params.id)));
});
app.listen(port, ()=>{
    console.log('servidor levantado en el purto' , port );
})