const chai = require('chai')
const chaiAsPromised = require('chai-as-promised')
const mock = require('mock-fs')
const _mocks = require('./_mocks')
const builder = require('./builder')

chai.use(chaiAsPromised)
chai.should()

describe('readme builder', () => {

  it('TEMP // should resolve if provided path match folder', done => {
    mock(_mocks['folder exists'])
    const promise = builder('tmp')
    promise.should.be.fulfilled
    mock.restore()
    done()
  })

  it('should reject if provided path doesn\'t match any folder', done => {
    mock(_mocks['no folder'])
    const promise = builder('tmp')
    promise.should.be.rejected
    mock.restore()
    done()
  })
})