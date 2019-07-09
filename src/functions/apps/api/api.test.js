const chai = require('chai')
const chaiAsPromised = require('chai-as-promised')
const request = require('request')

chai.use(chaiAsPromised)
const should = chai.should()

describe('firebase functions - [api app] root', () => {

  this.responses = {
    root: {}
  }

  before(done => {
    request('http://localhost:5000/api', (err, res) => {
      this.responses['root'].err = err
      this.responses['root'].response = res
      done()
    })
  })

  describe('## API root call', () => {

    describe('SUCCESS :', () => {

      it('should answer with a status code 200', done => {
        this.responses['root'].response.statusCode.should.equal(200)
        done()
      })

      it('should answer with a json content-type', done => {
        this.responses['root'].response.headers['content-type'].should.include('application/json;')
        done()
      })

      it('should answer a body with value === true property', done => {
        const body = JSON.parse(this.responses['root'].response.body)
        body.should.have.key('valid')
        body.valid.should.be.true
        done()
      })
    })
  })
})