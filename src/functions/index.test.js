const chai = require('chai')
const chaiAsPromised = require('chai-as-promised')
const request = require('request')

chai.use(chaiAsPromised)
const should = chai.should()

describe('firebase functions - index', () => {

  this.responses = {
    root: {}
  }

  before(done => {
    request('http://localhost:5000/', (err, res) => {
      this.error = err
      this.responses['root'] = res
      done()
    })
  })

  describe('## root call', () => {

    describe('SUCCESS :', () => {

      it('should resolve without error', () => {
        should.not.exist(this.error)
      })

      it('should answer with a status code 200', done => {
        this.responses['root'].statusCode.should.equal(200)
        done()
      })

      it('should redirect "/" to "/fr"', done => {
        this.responses['root'].request.path.should.equal('/fr')
        done()
      })

      it('should answer a page body with the id "home"', done => {
        this.responses['root'].body.slice(0, 100)
          .includes('id="home"').should.be.true
        done()
      })

      it('should answer a page body with lang set to "fr"', done => {
        this.responses['root'].body.slice(0, 100)
          .includes('lang="fr"').should.be.true
        done()
      })
    })
  })
})