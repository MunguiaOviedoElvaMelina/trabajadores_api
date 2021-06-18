const app = express()
const express = require('express')
let datos=["a","b","c","d","e"];
app.get('/', function (req, res) {
    res.send("Bienvenido a mi API")
  })
  app.get('/trabajadores', function (req, res) {
    res.json('{mensaje:"Todos los datos",datos:['+ datos +'] }')
  })
  app.get('/trabajador/:id',(req, res)=>{
    let dato=req.params.id;
    console.log(dato);
    res.json("{mensaje:'Se regresa un solo trabajador',valor:"+datos[dato]+"}")
  })
  console.log("escuchando en le puerto");
  app.listen(3000)