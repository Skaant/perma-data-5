const chai = require('chai')
const proxyquire = require('proxyquire')
const infoGetRoute = proxyquire(
  './infoGetRoute', {
    './infoGetHtml/infoGetHtml': (req, res) =>
      res.send('<html></html>'),
    './infoGetJson/infoGetJson': (req, res) =>
      res.json({
        infoGetJson: true
      })
  })

chai.should()

describe('[handler] infoRouter -> infoGetRoute', () => {

  it('should call infoGetHtml (mock) when req.headers.accept === "text/html"', done => {
    infoGetRoute({
      headers: {
        accept: 'text/html'
      }
    }, {
      send: () =>
        done()
    })
  })

  it('should call infoGetJson (mock) when req.headers.accept === "application/json"', done => {
    infoGetRoute({
      headers: {
        accept: 'application/json'
      }
    }, {
      json: () =>
        done()
    })
  })
})