const chai = require('chai')
const chaiAsPromised = require('chai-as-promised')
const mock = require('mock-fs')
const _mocks = require('./_mocks')
const readIndex = require('./readIndex')

chai.use(chaiAsPromised)
chai.should()

describe('readme builder - readIndex()', () => {
  
  describe('check index format', () => {

    it('should reject if provided path doesn\'t match any file', done => {
      mock(_mocks['no index'])
      const promise = readIndex('test')
      promise.should.be.rejectedWith('index file not found')
      mock.restore()
      done()
    })
  
    it('should reject if index cannot be parsed to JSON', done => {
      mock(_mocks['not json'])
      const promise = readIndex('test')
      promise.should.be.rejectedWith('cannot parse index to json')
      mock.restore()
      done()
    })
  
    it('should reject if index.json doesn\'t returns an object', done => {
      mock(_mocks['not object'])
      const promise = readIndex('test')
      promise.should.be.rejectedWith('index not an object')
      mock.restore()
      done()
    })
  
    it('should be fine', done => {
      mock(_mocks['ok'])
      const promise = readIndex('test')
      promise.should.be.fulfilled
      mock.restore()
      done()
    })
  })
})