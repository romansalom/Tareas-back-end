const e = require('express');
const express = require('express');
const fs = require('fs');
const {ProductManager}= require('./productManager');

const app = express();
const port = 8080;

app.get('/products', (req,res)=>{

    const obtenerproductos = JSON.parse(fs.readFileSync('productos.json', 'utf-8'));
    const limit = req.query.limit;
    if(limit) return res.send(obtenerproductos.slice(0,limit))

    else return res.send(obtenerproductos)


});


app.get('/products/:title', (req,res)=>{
    const title = req.query.title;
    const obtenerproductos = JSON.parse(fs.readFileSync('productos.json' ,'utf-8'));

    res.send(obtenerproductos.find(e => e.title === req.params.title));
});



app.get('/products/:id', (req,res)=>{
    const id = req.query.id();
    const obtenerproductos = JSON.parse(fs.readFileSync('productos.json' ,'utf-8'));

    res.send(obtenerproductos.find(e=>e.id === req.params.id))
});
app.listen(port, ()=>{
    console.log('servidor levantado en el purto' , port );
})