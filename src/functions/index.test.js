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
      this.responses['root'].err = err
      this.responses['root'].response = res
      done()
    })
  })

  describe('## root call', () => {

    describe('SUCCESS :', () => {

      it('should resolve without error', done => {
        should.not.exist(this.responses['root'].err)
        done()
      })

      it('should answer with a status code 200', done => {
        this.responses['root'].response.statusCode.should.equal(200)
        done()
      })

      it('should redirect "/" to "/fr"', done => {
        this.responses['root'].response.request.path.should.equal('/fr')
        done()
      })

      it('should answer with a "Hello PERMA-DATA" body', done => {
        this.responses['root'].response.body.should.equal('Hello PERMA-DATA')
        done()
      })
    })
  })
})