const express = require('express');
const app = express();
const path = require('path');
const puerto = 3030;
const publicPath = path.resolve(__dirname, './public');

//configuraciones
app.use(express.static(publicPath));
// app.use('/static', express.static(__dirname + '/public'));
// app.use('/imagenes', express.static(__dirname + '/public/images'));
//rutas
app.get('/', (req, res) => {
    res.sendFile(__dirname + "/views/home.html");
});
app.get('/car', (req, res) => {
    res.sendFile(__dirname + "/views/car.html");
});
app.get('/producto', (req, res) => {
    res.sendFile(__dirname + "/views/productDetail.html");
});
app.get('/registro', (req, res) => {
    res.sendFile(__dirname + "/views/registro.html");
});

app.get('/login', (req, res) => {
    res.sendFile(__dirname + "/views/login.html");
});
//Levantar servidor
app.listen(puerto, () => {
    console.log("Servidor corriendo desde puerto " + puerto);
});



