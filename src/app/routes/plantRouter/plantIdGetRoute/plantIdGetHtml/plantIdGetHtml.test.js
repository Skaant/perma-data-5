const chai = require('chai')
const isValidHtml = require('../../../../../utils/tests/isValidHtml/isValidHtml')
const plantIdGetHtml = require('./plantIdGetHtml')

chai.should()
const expect = chai.expect

describe('[handler] plantRouter > plantIdGetRoute > plantIdGetHtml', () => {

  const setup = () => ({
    req: {
      params: {
        id: 'prunus cerasus'
      }
    }
  })

  it('should send a valid html string.', done => {
    plantIdGetHtml(
      setup().req, {
      send: html => {
        isValidHtml(html).should.be.true
        done()
      }
    })
  })

  describe('[html :]', () => {

    it('should display a plant.id <h2> title', done => {
      const { req } = setup()
      plantIdGetHtml(
        req, {
        send: html => {
          expect(
            html.includes('<h2>'
              + req.params.id + '</h2>'))
            .to.be.true
          done()
        }
      })
    })
  })
})