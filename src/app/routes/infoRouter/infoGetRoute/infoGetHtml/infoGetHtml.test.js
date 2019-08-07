const chai = require('chai')
const isValidHtml = require('../../../../../utils/tests/isValidHtml/isValidHtml')
const infoGetHtml = require('./infoGetHtml')

chai.should()
const expect = chai.expect

describe('[handler] infoRouter > ingoGetRoute > infoGetHtml', () => {

  it('should send a valid html string.', done =>
    infoGetHtml({}, {
      send: html => {
        isValidHtml(html).should.be.true
        done()
      }
    }))

  describe('[html :]', () => {

    it('should display "Config" & "Package" <h2> titles', done => 
      infoGetHtml({}, {
        send: html => {
          expect(html.includes('<h2>Config</h2>')
            && html.includes('<h2>Package</h2>')).to.be.true
          done()
        }
      }))
  })
})