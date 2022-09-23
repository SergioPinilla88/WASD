const express = require('express');
const session = require('express-session');
const cookieParser = require('cookie-parser');


let rutasMain = require('./routes/mainRouter.js');
let rutasProduct = require('./routes/productRouter.js');
let rutasUser = require('./routes/userRouter.js');
let rutasCompra = require('./routes/shopRouter.js');
let rutasAdmin = require('./routes/adminRouter.js');
let rutasAPIProduct = require('./routes/API/productRouter.js')


const app = express();

app.set('view engine', 'ejs');

const methodOverride = require('method-override');
const isLoguedMiddleware = require("./middlewares/isLoguedMiddleware");
const cookieRecordarUser = require("./middlewares/cookieAuthMiddleWare");

app.use(cookieParser());

app.use(session({
    
    secret: "Es un secreto...",
    resave: false,
    saveUninitialized: false

}));



app.use(isLoguedMiddleware);
app.use(cookieRecordarUser);
app.use(express.static('public'));
app.use(express.urlencoded({extended:false}));
app.use(express.json());
app.use(methodOverride('_method'));

app.use('/', rutasMain);
app.use('/producto', rutasProduct);
app.use('/usuario', rutasUser);
app.use('/compra', rutasCompra);
app.use('/admin', rutasAdmin);
app.use('/API/productos', rutasAPIProduct);



app.listen(3000, () => {console.log('http://localhost:3000')});