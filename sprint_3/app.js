const express = require('express');

let rutasMain = require('./routes/mainRouter.js');
let rutasProduct = require('./routes/productRouter.js');
let rutasUser = require('./routes/userRouter.js');
let rutasCompra = require('./routes/shopRouter.js');
let rutasAddProduct = require('./routes/addProductsRouter.js');

const app = express();

app.set('view engine', 'ejs');

app.use(express.static('public'));
app.use('/', rutasMain);
app.use('/producto', rutasProduct);
app.use('/usuario', rutasUser);
app.use('/compra', rutasCompra);
app.use('/addProduct', rutasAddProduct);



app.listen(3000, () => {console.log('http://localhost:3000')});