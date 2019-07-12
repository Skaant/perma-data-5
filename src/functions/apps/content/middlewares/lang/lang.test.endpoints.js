const chai = require('chai')
const chaiAsPromised = require('chai-as-promised')
const requestP = require('request-promise-native')

chai.use(chaiAsPromised)

describe('firebase functions - [content app] - lang router endpoints ###', () => {

  before(done => {

    requestP({
      uri: 'http://localhost:5000/kak',
      resolveWithFullResponse: true
    })
      .then(() => {
        reject('/kak shouldn\'t be available')
        done()
      })
      .catch(err => {
        this.responses = {
          root: err
        }
        done()
      })
  })

  describe(`## "wrong" lang root call`, () => {
  
    describe('SUCCESS :', () => {

      it('should answer with a status code 400', () =>
        this.responses['root'].statusCode.should.equal(400))

      it('should answer with a html content-type', () =>
        this.responses['root'].response.headers['content-type'].should.include('text/html;'))

      it('should answer a page body with the id "error"', () =>
        this.responses['root'].response.body.slice(0, 50)
          .should.include('id="error"'))

      it('should answer a page body with lang set to en', () =>
        this.responses['root'].response.body.slice(0, 50)
          .should.include('lang="en"'))
    })
  })
})