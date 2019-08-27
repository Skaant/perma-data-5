const chai = require('chai')
const btoa = require('btoa')
const decryptPassword = require('./decryptPassword')

chai.should()

describe('[utils] authMiddleware > decryptAuthorization', () => {

  it('should return the decrypted user property from authorization string', done => {

    const decrypted =
      decryptPassword(
        btoa('wesh alors')
      )
    decrypted
      .should.equal(
        'wesh alors')
    done()
  })
})