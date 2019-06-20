const chai = require('chai')
const chaiAsPromised = require('chai-as-promised')
const mock = require('mock-fs')
const _mocks = require('./_mocks')
const fileReader = require('./fileReader')

chai.use(chaiAsPromised)
chai.should()

describe('readme builder - fileReader()', () => {

  describe('CHECKS :', () =>

    describe('* target file', () =>
    
      it('should reject if provided path doesn\'t match any file', done => {
        const key = 'file not found'
        mock(_mocks[key])
        const promise = fileReader('sample.md')
        promise.should.be.rejectedWith(key)
        mock.restore()
        done()
      })))
  
  describe('SUCCESS :', () =>

    it('should resolve with a (markdown) string equal to target file content', done => {
      mock(_mocks['file success'])
      const promise = fileReader('sample.md')
      promise.should.eventually.equal('# expected title')
      mock.restore()
      done()
    }))
})