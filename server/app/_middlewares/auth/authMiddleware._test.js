const chai = require('chai')
const proxyquire = require('proxyquire')
const btoa = require('btoa')
const authMiddleware = require('./authMiddleware')

chai.should()

describe('[middleware] authMiddleware #e2e', () => {

  it('should set req.user with decrypted btoa user if authentication header is set', done => {
    const req = {
      headers: {
        authorization: 'Basic '
          + btoa('salut:lesAmis')
      }
    }
    authMiddleware(req, {}, () => {
      req.user.username
        .should.equal('salut')
      req.user.password
        .should.equal('lesAmis')
      req.user._id
        .should.exist
      done()
    })
  })
})