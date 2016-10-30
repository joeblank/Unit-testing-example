var chai = require('chai');
var chaiHttp = require('chai-http');
var server = require('../server');
var expect = chai.expect;

chai.use(chaiHttp);

describe('productsCtrl', function() {

  it('expect true to equal true', function() {
    expect(true).to.equal(true);
  })

  it('should get all products', function() {
    chai.request(server)
    .get('/products')
    .end(function(err, res) {
      console.log(res.body)
      expect(res.body).to.have.status(400)
      expect(res.body).to.be.a('array')
      expect(res.body).to.equal('hey')
    })
  })

  it('should get back talking', function() {
    chai.request(server)
    .get('/test')
    .end(function(err, res) {
        console.log(res.body);
        expect(res).to.be.ok;
        expect(res).to.have.status(200);
        expect(res).to.equal('talking');
    })
  })



})
