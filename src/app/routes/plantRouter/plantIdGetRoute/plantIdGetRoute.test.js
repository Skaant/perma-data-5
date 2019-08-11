const chai = require('chai')
const proxyquire = require('proxyquire')
const plantIdGetRoute = proxyquire(
  './plantIdGetRoute', {
    './plantIdGetJson/plantIdGetJson': (req, res) =>
      res.json({
        plantIdGetJson: true
      })
  })

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

  it.only('should call plantIdGetJson (mock) when req.headers.accept === "application/json"', done =>
    plantIdGetRoute({
      headers: {
        accept: 'application/json'
      },
      params: {
        id: 'calendula officinalis'
      }
    }, {
      status: function() { return this },
      json: content => {
        console.log(content)
        content.should.be.an('object')
        done()
      }
    }))
})