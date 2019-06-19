const chai = require('chai')
const chaiAsPromised = require('chai-as-promised')
const mock = require('mock-fs')
const _mocks = require('./_mocks')
const browseContent = require('./browseContent')

chai.use(chaiAsPromised)
chai.should()

const rejectionCheck = (key, done) => {
  const promise = browseContent(_mocks[key].content)
  promise.should.be.rejectedWith(key)
  done()
}

describe('readme builder - browseContent()', () => {

  describe('CHECKS :', () => {

    describe('* content param', () => {
    
      it('should reject if content param isn`t an array', done => 
        rejectionCheck('content not array', done))
      
      it('should reject if content param is an empty array', done => 
        rejectionCheck('content empty array', done))
    })

    describe('* item value', () => {
    
      it('should reject if item isn\'t a string', done =>
        rejectionCheck('item not string', done))
    })
  })

  describe('SUCCESS :', () => {
  
    it('should resolve with a (markdown) string based on the target folder content', done => {
      const key = 'content success'
      mock(_mocks[key].fileSystem)
      const promise = browseContent(_mocks[key].content, 'test')
      promise.should.eventually.equal('# perma-data is so cool'
        + '\n\n' + '**temp**')
      mock.restore()
      done()
    })
  })
})