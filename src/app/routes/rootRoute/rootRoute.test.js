const chai = require('chai')
const isValidHtml = require('../../../utils/tests/isValidHtml/isValidHtml')
const rootRoute = require('./rootRoute')

chai.should()

describe('[handler] rootRoute', () => {

  it('should send a valid html string', done =>
    rootRoute({}, {
      send: html => {
        isValidHtml(html)
          .should.be.true
        done()
      }
    }))
})