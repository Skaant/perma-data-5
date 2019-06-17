const chai = require('chai')
const chaiAsPromised = require('chai-as-promised')
const mock = require('mock-fs')
const _mocks = require('./_mocks')
const builder = require('./builder')

chai.use(chaiAsPromised)
chai.should()

describe('readme builder', () => {

  describe('target folder', () => {

    it('should reject if provided path doesn\'t match any folder', done => {
      mock(_mocks['no folder'])
      const promise = builder('test')
      promise.should.be.rejectedWith('target folder not found')
      mock.restore()
      done()
    })

    it('should reject if folder doesn\'t contain an `index.json` file', done => {
      mock(_mocks['folder exists'])
      const promise = builder('test')
      promise.should.be.rejectedWith('no index.json file')
      mock.restore()
      done()
    })
  })
})