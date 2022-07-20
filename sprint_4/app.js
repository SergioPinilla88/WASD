const express = require('express');

let rutasMain = require('./routes/mainRouter.js');
let rutasProduct = require('./routes/productRouter.js');
let rutasUser = require('./routes/userRouter.js');
let rutasCompra = require('./routes/shopRouter.js');
let rutasAdmin = require('./routes/adminRouter.js');

const app = express();

app.set('view engine', 'ejs');

const methodOverride = require('method-override');

app.use(express.static('public'));
app.use(express.urlencoded({extended:false}));
app.use(express.json());
app.use(methodOverride('_method'));

app.use('/', rutasMain);
app.use('/producto', rutasProduct);
app.use('/usuario', rutasUser);
app.use('/compra', rutasCompra);
app.use('/admin', rutasAdmin);



app.listen(3000, () => {console.log('http://localhost:3000')});