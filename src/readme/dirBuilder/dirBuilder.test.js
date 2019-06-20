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
  promise.should.be.rejectedWith(key).notify(done)
}

describe('readme builder - dirBuilder()', () => {

  after(() => mock.restore())

  describe('CHECKS :', () => {

    it('should reject if provided path doesn\'t match any folder', done =>
      rejectionCheck('folder not found', done))
  
    it('should reject if folder is empty', done => 
      rejectionCheck('folder empty', done))
  })

  describe('SUCCESS :', () => {
    
    it('should resolve with a (markdown) string based on the target folder content', done => {
      mock(_mocks['content success'])
      const promise = dirBuilder('test')
      promise.should.eventually.equal('# perma-data is so cool'
        + '\n\n' + '*here is the components list*')
        .notify(done)
    })
  })
})