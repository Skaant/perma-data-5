const chai = require('chai')
const btoa = require('btoa')
const decryptAuthorization = require('./decryptAuthorization')

chai.should()

describe('[utils] authMiddleware > decryptAuthorization', () => {

  it('should return the decrypted user property from authorization string', done => {
    const decrypted = decryptAuthorization(
      'Basic '
      + btoa('wesh:alors'))
    decrypted.username
      .should.equal('wesh')
    decrypted.password
      .should.equal('alors')
    done()
  })
})