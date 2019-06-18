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

  describe('content param checks', () => {
  
    it('should reject if content param isn`t an array', done => 
      rejectionCheck('content not array', done))
    
    it('should reject if content param is an empty array', done => 
      rejectionCheck('content empty array', done))
  })

  describe('item value check', () => {
  
    it('should reject if item isn\'t a string', done =>
      rejectionCheck('item not string', done))
  })
})