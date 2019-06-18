const chai = require('chai')
const chaiAsPromised = require('chai-as-promised')
const mock = require('mock-fs')
const _mocks = require('./_mocks')
const fileReader = require('./fileReader')

chai.use(chaiAsPromised)
chai.should()

describe('readme builder - fileReader()', () => {

  it('should reject if provided path doesn\'t match any file', done => {
    const key = 'file not found'
    mock(_mocks[key])
    const promise = fileReader('sample.md')
    promise.should.be.rejectedWith(key)
    mock.restore()
    done()
  })
})