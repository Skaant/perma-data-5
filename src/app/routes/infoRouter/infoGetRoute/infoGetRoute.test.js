const chai = require('chai')
const infoGetRoute = require('./infoGetRoute')

chai.should()

describe('[handler] infoRouter -> infoGetRoute', () => {

  it('should send with html content when "accept" header is set "text/html"', done => {
    infoGetRoute({
      headers: {
        accept: 'text/html'
      }
    }, {
      send: content => {
        content.should.include('<html>')
        done()
      }
    })
  })

  it('should send with json content when "accept" header is set "application/json"', done => {
    infoGetRoute({
      headers: {
        accept: 'application/json'
      }
    }, {
      json: content => {
        content.should.be.an('object')
        done()
      }
    })
  })
})