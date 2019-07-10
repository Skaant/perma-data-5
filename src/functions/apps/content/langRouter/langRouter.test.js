const chai = require('chai')
const chaiAsPromised = require('chai-as-promised')
const langRouter = require('./langRouter')
const langs = require('../../../../../config.json').langs

chai.use(chaiAsPromised)

describe('firebase functions - [content app] - lang router', () => {

  it('should returns an object with as much sub-routers than enabled langs + wildcard 404', () => {
    langRouter.stack.length.should.equal(langs.length + 1)
  })
})