const express = require('express');
const app = express();
const path = require('path')
const puerto = 3030;
const publicPath = path.resolve(__dirname, './public')

//configuraciones
app.use(express.static(publicPath));
// app.use('/static', express.static(__dirname + '/public'));
// app.use('/imagenes', express.static(__dirname + '/public/images'));
//rutas
app.get('/', (req, res) => {
    res.sendFile(__dirname + "/views/home.html");
});
//Levantar servidor
app.listen(puerto, () => {
    console.log("Servidor corriendo desde puerto " + puerto);
});

//Burguer Menu

