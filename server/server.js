var express = require('express');
var cors = require('cors');
var bodyParser = require('body-parser');
var massive = require('massive');


var app = module.exports = express();

app.use(bodyParser.json());
app.use(express.static('./../public'));
app.use(cors());

var massiveServer = massive.connectSync({
  connectionString: 'postgress://localhost/test-db'
})
app.set('db', massiveServer);

var productsCtrl = require('./productsCtrl');

var db = app.get('db');

app.get('/products', productsCtrl.getProducts);
app.post('/addProduct', productsCtrl.addProduct);





var port = 4500;
app.listen(port, function() {
  console.log('Slytherin on port: ' + port)
})
