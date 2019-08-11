const chai = require('chai')
const proxyquire = require('proxyquire')
const plantIdGetRoute = proxyquire(
  './plantIdGetRoute', {
    './plantIdGetHtml/plantIdGetHtml': (req, res) =>
      res.send('<html></html>'),
    './plantIdGetJson/plantIdGetJson': (req, res) =>
      res.json({
        plantIdGetJson: true
      })
  })

chai.should()

describe('[handler] plantRouter -> plantIdGetRoute', () => {

  it('should call plantIdGetHtml (mock) when req.headers.accept === "text/html"', done =>
    plantIdGetRoute({
      headers: {
        accept: 'text/html'
      }
    }, {
      send: () =>
        done()
    }))

  it('should call plantIdGetJson (mock) when req.headers.accept === "application/json"', done => {
    plantIdGetRoute({
      headers: {
        accept: 'application/json'
      }
    }, {
      json: () =>
        done()
    })
  })
})