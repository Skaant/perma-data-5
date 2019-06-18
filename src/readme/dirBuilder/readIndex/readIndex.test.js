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
  mock.restore()
  done()
}

describe('readme builder - readIndex()', () => {
  
  describe('index file check', () => {

    it('should reject if provided path doesn\'t match any file', done =>
      rejectionCheck('no file', done))
  })

  describe('index format checks', () => {
  
    it('should reject if index cannot be parsed to JSON', done =>
      rejectionCheck('format not json', done))
  
    it('should reject if the index root isn\'t an object', done =>
      rejectionCheck('format not object', done))
  })
    
  describe('index content check', () => {

    it('should reject if index doesn\'t have a content property', done =>
      rejectionCheck('content missing', done))
  })
})