var chai = require('chai');
var chaiHttp = require('chai-http');
var server = require('../server');
var expect = chai.expect;

chai.use(chaiHttp);

var fakeProduct = {
  name: 'Fake Racquet',
  price: 950
};


describe('productsCtrl', function() {

  it('expect true to equal true', function(done) {
    expect(true).to.equal(true);
    done();
  })

  it('should get all products', function(done) {
    chai.request(server)
    .get('/products')
    .end(function(err, res) {
      console.log(res.body);
      expect(res).to.have.status(200);
      expect(res.body).to.be.a('array');
      // expect(res.body).to.equal('hey');
      done();
    })
  })

  it('should get back talking', function(done) {
    chai.request(server)
    .get('/test')
    .end(function(err, res) {
        console.log(res.body);
        expect(res).to.be.ok;
        expect(res).to.have.status(200);
        expect(res.body).to.equal('talking');
        done();
    })
  })

  it('should create a new racquet', function(done) {

    chai.request(server)
    .post('/addProduct')
    .send({name: fakeProduct.name, price: fakeProduct.price})
    .end(function(err, res) {
      console.log('this is what is sent: ' + fakeProduct);
      expect(res).to.have.status(200);
      expect(res.body).to.be.ok;
      expect(res.body).to.equal('created!');
      console.log(res.body);
      console.log(fakeProduct.Price);
      done();
    })
  })

  // it('should delete fake racquet', function(done) {
  //   chai.request(server)
  //   .delete('/delete:id')
  //
  //
  //
  // })



})
