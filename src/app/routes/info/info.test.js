const chai = require('chai')
const chaiHttp = require('chai-http')
const  app = require('../../app')

chai.use(chaiHttp)
chai.should()

describe('[endpoint] /info', () => {

  it('should respond with html content when "accept" header is set to "text/html"', () =>
    chai.request(app)
      .get('/info')
      .set('accept', 'text/html')
      .then(res =>
        res.should.be.html))

  it('should respond with json content when "accept" header is set to "application/json"', () =>
    chai.request(app)
      .get('/info')
      .set('accept', 'application/json')
      .then(res =>
        res.should.be.json))
})