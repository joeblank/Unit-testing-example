var app = require('./server');
var db = app.get('db');


module.exports = {

  getProducts: function(req,res,next) {
    db.read_products(function(err, prod) {
      res.status(200).json(prod);
    })
  },
  addProduct: function(req,res,next) {
    console.log(req.body)
    var name = req.body.name;
    var price = req.body.price;
    db.create_product([name, price], function(err, prod) {
      res.status(200).json('created!');
    })
  }


}
