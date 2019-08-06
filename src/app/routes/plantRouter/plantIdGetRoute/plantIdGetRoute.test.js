const chai = require('chai')
const plantIdGetRoute = require('./plantIdGetRoute')

chai.should()

describe('[handler] plantRouter -> plantIdGetRoute', () => {

  it('should send with html content when "accept" header is set "text/html"', done =>
    plantIdGetRoute({
      headers: {
        accept: 'text/html'
      },
      params: {
        id: 'calendula officinalis'
      }
    }, {
      send: content => {
        content.should.include('<html>')
        done()
      }
    }))

  it('should send with json content when "accept" header is set "application/json"', done =>
    plantIdGetRoute({
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