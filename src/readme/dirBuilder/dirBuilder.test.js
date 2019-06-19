const chai = require('chai')
const chaiAsPromised = require('chai-as-promised')
const mock = require('mock-fs')
const _mocks = require('./_mocks')
const dirBuilder = require('./dirBuilder')

chai.use(chaiAsPromised)
chai.should()

const rejectionCheck = (key, done) => {
  mock(_mocks[key])
  const promise = dirBuilder('test')
  promise.should.be.rejectedWith(key)
  mock.restore()
  done()
}

describe('readme builder - dirBuilder()', () =>

  describe('CHECKS :', () => {

    it('should reject if provided path doesn\'t match any folder', done =>
      rejectionCheck('folder not found', done))
  
    it('should reject if folder is empty', done => 
      rejectionCheck('folder empty', done))
  }))