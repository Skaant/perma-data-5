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
    request('http://localhost:5000/fr', (err, res) => {
      this.responses['root'].err = err
      this.responses['root'].response = res
      done()
    })
  })

  describe('## FR root call', () => {

    describe('SUCCESS :', () => {

      it('should resolve without error', done => {
        should.not.exist(this.responses['root'].err)
        done()
      })

      it('should answer with a status code 200', done => {
        this.responses['root'].response.statusCode.should.equal(200)
        done()
      })

      it('should answer with a html content-type', done => {
        this.responses['root'].response.headers['content-type'].should.include('text/html;')
        done()
      })

      it('should answer a page body with the id "home"', done => {
        this.responses['root'].response.body.slice(0, 50)
          .should.include('id="home"')
        done()
      })

      it('should answer a page body with lang set to "fr"', done => {
        this.responses['root'].response.body.slice(0, 50)
          .should.include('lang="fr"')
        done()
      })
    })
  })
})