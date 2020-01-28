const chai = require('chai')
const chaiHttp = require('chai-http')
const app = require('./app/app')

chai.use(chaiHttp)
chai.should()

describe('_endpoints', () => {

  describe('/ (home)', () => {

    it('should respond with html content', done => {
  
      chai.request(app)
        .get('/')
        .then(res => {
          console.log(res)
          res.should.be.html
          done()
        })
    })
  })

  describe('/plant/:id', () => {

    it('should respond with html content when "accept" header is set to "text/html"', done => {
      chai.request(app)
        .get('/plant/accacia')
        .set('accept', 'text/html')
        .then(res => {
          res.should.be.html
          done()
        })
    })

    it('should respond with json content when "accept" header is set to "application/json"   #mongodb-atlas-call', done => {
      chai.request(app)
        .get('/plant/accacia')
        .set('accept', 'application/json')
        .then(res => {
          res.should.be.json
          done()
        })
    })
  })
})