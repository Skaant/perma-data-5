const chai = require('chai')
const chaiAsPromised = require('chai-as-promised')
const mock = require('mock-fs')
const _mocks = require('./_mocks')
const browseContent = require('./browseContent')
const dirBuilder = require('../../dirBuilder/dirBuilder')

chai.use(chaiAsPromised)
chai.should()

const rejectionCheck = (key, done) => {
  const promise = browseContent(_mocks[key].content)
  promise.should.be.rejectedWith(key)
  done()
}

describe('readme builder - browseContent() #local', () => {

  after(() => mock.restore())

  describe('CHECKS :', () => {

    describe('* item value', () => {
    
      it('should reject if item isn\'t a string', done =>
        rejectionCheck('item not string', done))
    })
  })

  describe('SUCCESS :', () => {
  
    it('should resolve with a (markdown) string based on the target folder content', done => {
      const key = 'content success'
      mock(_mocks[key].fileSystem)
      const promise = browseContent(_mocks[key].content, 'test', dirBuilder)
      promise.should.eventually.equal('# perma-data is so cool'
        + '\n\n' + '*here is the components list*')
      done()
    })
  })
})