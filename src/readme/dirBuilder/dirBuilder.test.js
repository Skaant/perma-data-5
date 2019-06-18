const chai = require('chai')
const chaiAsPromised = require('chai-as-promised')
const mock = require('mock-fs')
const _mocks = require('./_mocks')
const dirBuilder = require('./dirBuilder')

chai.use(chaiAsPromised)
chai.should()

describe('readme dirBuilder - dirBuilder()', () => {

  it('should reject if provided path doesn\'t match any folder', done => {
    mock(_mocks['no folder'])
    const promise = dirBuilder('test')
    promise.should.be.rejectedWith('target folder not found')
    mock.restore()
    done()
  })

  it('should reject if folder is empty', done => {
    mock(_mocks['folder exists'])
    const promise = dirBuilder('test')
    promise.should.be.rejectedWith('empty folder')
    mock.restore()
    done()
  })
})