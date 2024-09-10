const express = require('express') 
const app = express() 


app.use(express.static(`public`));

app.use((req, res, next)=> {
    console.log('Esto se ejecuta antes de cualquier cosa');
    next()
})

app.get("/", (req, res) => { 
    res.send("Hola mundo!  prueba ") 
})

app.get("/formulario", (req, res) => { 
    console.log("Prueba")
    res.sendFile(__dirname + `/public/html/formulario.html`) 
})

app.get("/login", (req, res) => { 
    const datos = req.query
    console.log(datos);
    console.log(datos.nombreUsuario);
    console.log(datos.clave);
    res.send("Login")
})

app.get('/:id', (req, res)=>{
    const id = req.params
    console.log(id);
    res.send('jugando con parametros')
})

app.post(".")

app.get("/*", (req, res) => { 
    res.sendFile(__dirname + `/public/html/error.html`) 
})

app.listen(3000) 

