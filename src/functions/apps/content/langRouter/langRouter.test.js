const chai = require('chai')
const chaiAsPromised = require('chai-as-promised')
const requestP = require('request-promise-native')
const langRouter = require('./langRouter')
const langs = require('../../../../../config.json').langs

chai.use(chaiAsPromised)
const should = chai.should()

describe('firebase functions - [content app] - lang router', () => {

  it('should returns an object with as much sub-routers than enabled langs', () => {
    langRouter.stack.length.should.equal(langs.length)
  })
})