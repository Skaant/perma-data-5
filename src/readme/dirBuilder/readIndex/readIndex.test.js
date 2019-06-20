const chai = require('chai')
const chaiAsPromised = require('chai-as-promised')
const mock = require('mock-fs')
const _mocks = require('./_mocks')
const readIndex = require('./readIndex')

chai.use(chaiAsPromised)
chai.should()

const rejectionCheck = (key, done) => {
  mock(_mocks[key])
  const promise = readIndex('test')
  promise.should.be.rejectedWith(key)
  done()
}

describe('readme builder - readIndex()', () => {

  after(() => mock.restore())

  describe('CHECKS :', () => {
    
    describe('* index file', () => {

      it('should reject if provided path doesn\'t match any file', done =>
        rejectionCheck('file not found', done))
    })

    describe('* index format', () => {
    
      it('should reject if index cannot be parsed to JSON', done =>
        rejectionCheck('format not json', done))
    
      it('should reject if the index root isn\'t an object', done =>
        rejectionCheck('format not object', done))
    })
      
    describe('* index content', () => {

      it('should reject if index doesn\'t have a content property', done =>
        rejectionCheck('content missing', done))
  
      it('should reject if content param isn`t an array', done => 
        rejectionCheck('content not array', done))
      
      it('should reject if content param is an empty array', done => 
        rejectionCheck('content empty array', done))
    })
  })

  describe('SUCCESS :', () => 
    it('should resolve with a (markdown) string extrapoled from target folder index file', done => {
      const key = 'content success'
      mock(_mocks[key])
      const promise = readIndex('test')
      promise.should.eventually.deep.equal([
        'introduction.md',
        'components documentation'])
      done()
    }))
})