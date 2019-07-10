const chai = require('chai')
const chaiAsPromised = require('chai-as-promised')
const index = require('./index')

chai.use(chaiAsPromised)

describe('firebase functions - index', () => {

  it('should returns an object with a "content" property', () => {
    index.should.have.property('content')
  })
})