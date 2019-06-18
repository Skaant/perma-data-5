const chai = require('chai')
const chaiAsPromised = require('chai-as-promised')
const mock = require('mock-fs')
const _mocks = require('./_mocks')
const builder = require('./builder')

chai.use(chaiAsPromised)
chai.should()

describe('readme builder - builder()', () => {

  it('should reject if provided path doesn\'t match any folder', done => {
    mock(_mocks['no folder'])
    const promise = builder('test')
    promise.should.be.rejectedWith('target folder not found')
    mock.restore()
    done()
  })

  it('should reject if folder is empty', done => {
    mock(_mocks['folder exists'])
    const promise = builder('test')
    promise.should.be.rejectedWith('empty folder')
    mock.restore()
    done()
  })
})