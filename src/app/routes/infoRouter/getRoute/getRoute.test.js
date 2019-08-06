const chai = require('chai')
const getRoute = require('./getRoute')

chai.should()

describe('[route] infoRouter -> get', () => {

  it('should send with html content when "accept" header is set "text/html"', done =>
    getRoute({
      headers: {
        accept: 'text/html'
      }
    }, {
      send: content => {
        content.should.include('<html>')
        done()
      }
    }))

  it('should send with json content when "accept" header is set "application/json"', done =>
    getRoute({
      headers: {
        accept: 'application/json'
      }
    }, {
      json: content => {
        content.should.be.an('object')
        done()
      }
    }))
})