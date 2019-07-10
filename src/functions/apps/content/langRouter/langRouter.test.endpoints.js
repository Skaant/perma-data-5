const chai = require('chai')
const chaiAsPromised = require('chai-as-promised')
const requestP = require('request-promise-native')
const langs = require('../../../../../config.json').langs

chai.use(chaiAsPromised)
const should = chai.should()

describe('firebase functions - [content app] - lang router endpoints ###', () => {

  // "kak" stands for an unknown lang
  const mockLangs = langs.concat(['kak'])
  const wrongPromise = new Promise((resolve, reject) =>
    requestP({
      uri: 'http://localhost:5000/kak',
      resolveWithFullResponse: true
    })
      .then(() => reject('/kak shouldn\'t be available'))
      .catch(err => resolve(err)))

  this.responses = mockLangs.reduce((acc, lang) => {
    acc[lang] = {}
    return acc
  }, {})

  before(done => {
    Promise.all(langs.map(lang => requestP({
      uri: 'http://localhost:5000/' + lang,
      resolveWithFullResponse: true
    })).concat(wrongPromise))
      .then(results => {
        mockLangs.forEach((lang, index) => 
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

    describe(`## ${ lang } (lang root) call`, () => {
  
      describe('SUCCESS :', () => {
  
        it('should answer with a status code 200', () =>
          this.responses[lang].statusCode.should.equal(200))
  
        it('should answer with a html content-type', () =>
          this.responses[lang].headers['content-type'].should.include('text/html;'))
  
        it('should answer a page body with the id "home"', () =>
          this.responses[lang].body.slice(0, 50)
            .should.include('id="home"'))
  
        it('should answer a page body with lang set to ' + lang, () =>
          this.responses[lang].body.slice(0, 50)
            .should.include(`lang="${ lang }"`))
      })
    })
  })

  describe(`## "wrong" lang root call`, () => {
  
    describe('SUCCESS :', () => {

      it('should answer with a status code 404', () =>
        this.responses['kak'].statusCode.should.equal(404))

      it('should answer with a html content-type', () =>
        this.responses['kak'].response.headers['content-type'].should.include('text/html;'))

      it('should answer a page body with the id "error"', () =>
        this.responses['kak'].response.body.slice(0, 50)
          .should.include('id="error"'))

      it('should answer a page body with lang set to en', () =>
        this.responses['kak'].response.body.slice(0, 50)
          .should.include('lang="en"'))
    })
  })
})