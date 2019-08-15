const chai = require('chai')
const proxyquire = require('proxyquire')
const isValidHtml = require('../../../../../utils/tests/isValidHtml/isValidHtml')
const plantIdGetHtml = proxyquire(
  './plantIdGetHtml', {
    '../../../../../mongo/mongo': require('../../../../../mongo/_mock/mongo')
  })

chai.should()
const expect = chai.expect

describe('[handler] plantRouter > plantIdGetRoute > plantIdGetHtml', () => {

  it('should send a valid html string.', done =>
    plantIdGetHtml({
      req: {
        params: {
          id: 'prunus cerasus'
        }
      }
    }, {
      send: html => {
        isValidHtml(html).should.be.true
        done()
      }
    }))

  describe('[html :]', () => {

    /* it('should display a plant.id <h2> title', done =>
      plantIdGetHtml({
        req: {
          params: {
            id: 'prunus cerasus'
          }
        }
      }, {
        send: html => {
          expect(
            html.includes('<h2>'
              + req.params.id + '</h2>'))
            .to.be.true
          done()
        }
      })) */
  })
})