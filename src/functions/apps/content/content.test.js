const chai = require('chai')
const chaiAsPromised = require('chai-as-promised')
const content = require('./content')

chai.use(chaiAsPromised)

describe('firebase functions - content (app root)', () => {

  it('should returns an EventEmitter object', () => {
    content.constructor.name.should.equal('EventEmitter')
  })

  it('should be configured to use the pug view engine', () => {
    content.settings['view engine'].should.equal('pug')
  })

  /* it('should be configured to use middlewares', () => {}) */

  /* it('should be configured to use the lang router', () => {}) */
}) 