const chai = require('chai')
const chaiAsPromised = require('chai-as-promised')
const requestP = require('request-promise-native')
const langs = require('../../../../../config.json').langs

chai.use(chaiAsPromised)
const should = chai.should()

describe('firebase functions - [content app] - lang router endpoints ###', () => {

  // "wrong" lang root call is tested against lang middleware
  this.responses = langs.reduce((acc, lang) => {
    acc[lang] = {}
    return acc
  }, {})

  before(done => {
    Promise.all(langs.map(lang => requestP({
      uri: 'http://localhost:5000/' + lang,
      resolveWithFullResponse: true
    })))
      .then(results => {
        langs.forEach((lang, index) => 
          this.responses[lang] = results[index])
        done()
      })
      .catch(err => {
        this.error = err
        done()
      })
  })

  describe('CHECKS :', () => {
    
    // error isn't thrown for wrong promise
    // => this test only check success for enabled langs root call
    it('should not resolve with error', () => {
      should.not.exist(this.error)
    })
  })

  langs.map(lang => {

    describe(`## ${ lang } lang root call`, () => {
  
      describe('SUCCESS :', () => {
  
        it('should answer with a status code 200', () =>
          this.responses[lang].statusCode.should.equal(200))
  
        it('should answer with a html content-type', () =>
          this.responses[lang].headers['content-type'].should.include('text/html;'))
  
        it('should answer a page body with lang set to ' + lang, () =>
          this.responses[lang].body.slice(0, 50)
            .should.include(`lang="${ lang }"`))
      })
    })
  })
})