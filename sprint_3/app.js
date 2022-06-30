const express = require('express');

let rutasMain = require('./routes/mainRouter.js');
let rutasProduct = require('./routes/productRouter.js');
let rutasUser = require('./routes/userRouter.js');
let rutasCompra = require('./routes/shopRouter.js');


const app = express();

app.set('view engine', 'ejs');

app.use(express.static('public'));
app.use('/', rutasMain);
app.use('/producto', rutasProduct);
app.use('/usuario', rutasUser);
app.use('/compra', rutasCompra);



app.listen(3000, () => {console.log("Servidor levantado en puerto 3000")});
