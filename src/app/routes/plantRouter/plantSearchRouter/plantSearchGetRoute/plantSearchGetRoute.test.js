const chai = require('chai')
const proxyquire = require('proxyquire')
const plantIdGetRoute = proxyquire(
  './plantSearchGetRoute', {
    /* './plantSearchGetHtml/plantSearchGetHtml': (req, res) =>
      res.send('<html></html>'), */
    './plantSearchGetJson/plantSearchGetJson': (req, res) =>
      res.json({
        plantSearchGetJson: true
      })
  })

chai.should()

describe('[handler] plantRouter -> plantIdGetRoute', () => {

  /* it('should call plantIdGetHtml (mock) when req.headers.accept === "text/html"', done =>
    plantIdGetRoute({
      headers: {
        accept: 'text/html'
      }
    }, {
      send: () =>
        done()
    })) */

  it('should call plantSearchGetJson (mock) when req.headers.accept === "application/json"', done => {
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