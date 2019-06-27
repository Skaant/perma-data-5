const chai = require('chai')
const chaiAsPromised = require('chai-as-promised')
const fs = require('fs')
const mock = require('mock-fs')
const _mocks = require('./_mocks')
const build = require('./build')

chai.use(chaiAsPromised)
const should = chai.should()

describe('readme builder - build()', () => {

  after(() => mock.restore())

  describe('SUCCESS :', () => {
    
    it('should write the READ.me file in the folder root', done => {
      mock(_mocks['success'])
      build('test')
        .then(() => 
          fs.readFile('README.md', (err, data) => {
            should.not.exist(err)
            const readme = data.toString()
            readme.should.equal('# perma-data is so cool'
              + '\n\n' + '*here is the components list*')
            done()
          }))
        .catch(err => {
          should.not.exist(err)
          done()
        })
    })
  })
})