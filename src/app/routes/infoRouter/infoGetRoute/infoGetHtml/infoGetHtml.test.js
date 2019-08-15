const chai = require('chai')
const isValidHtml = require('../../../../../utils/tests/isValidHtml/isValidHtml')
const infoGetHtml = require('./infoGetHtml')

chai.should()
const expect = chai.expect

describe('[handler] infoRouter > ingoGetRoute > infoGetHtml', () => {

  it('should send a valid html string.', done => {
    infoGetHtml({}, {
      send: html => {
        isValidHtml(html)
          .should.be.true
        done()
      }
    })
  })

  describe('[html :]', () => {

    it('should display "Config" & "Package" <h2> titles', done => {
      infoGetHtml({}, {
        send: html => {
          expect(html)
            .to.include(
              '<h2>Run configuration</h2>')
            .and
            .to.include(
              '<h2>Stack configuration</h2>')
          done()
        }
      })
    })
  })
})