const chai = require('chai')
const chaiAsPromised = require('chai-as-promised')
const requestP = require('request-promise-native')
const langs = require('../../../../../../config.json').langs

chai.use(chaiAsPromised)
const should = chai.should()

describe('firebase functions - [content app] - content router endpoints ###', () => {

  // "kak" stands for an unknown page
  const wrongPromiseGenerator = lang =>
    new Promise((resolve, reject) =>
      requestP({
        uri: `http://localhost:5000/${ lang }/kak`,
        resolveWithFullResponse: true
      })
        .then(() => reject('/kak shouldn\'t be available'))
        .catch(err => resolve(err)))

  this.responses = langs.reduce((acc, lang) => {
    acc[lang] = {
      root: {},
      wrong: {}
    }
    return acc
  }, {})

  before(done => {
    Promise.all(langs.reduce((acc, lang) => {
      acc.push(requestP({
        uri: 'http://localhost:5000/' + lang,
        resolveWithFullResponse: true
      }))
      acc.push(wrongPromiseGenerator(lang))
      return acc
    }, []))
      .then(results => {
        langs.forEach((lang, index) => {
          this.responses[lang].root = results[index * 2]
          this.responses[lang].wrong = results[index * 2 + 1]
        })
        done()
      })
      .catch(err => {
        this.error = err
        done()
      })
  })

  describe('CHECKS :', () => {
    
    // error isn't thrown for wrong promises
    // => this test only check success for enabled content root call
    it('should not resolve with error', () => {
      should.not.exist(this.error)
    })
  })

  langs.map(lang => {

    describe(`## ${ lang } lang root call`, () => {
  
      describe('SUCCESS :', () => {
  
        it('should answer with a status code 200', () =>
          this.responses[lang].root.statusCode.should.equal(200))
  
        it('should answer with a html content-type', () =>
          this.responses[lang].root.headers['content-type'].should.include('text/html;'))
  
        it('should answer a page body with the id "home"', () =>
          this.responses[lang].root.body.slice(0, 50)
            .should.include('id="home"'))
  
        it('should answer a page body with lang set to ' + lang, () =>
          this.responses[lang].root.body.slice(0, 50)
            .should.include(`lang="${ lang }"`))
      })
    })

    describe(`## "wrong" ${ lang } lang root call`, () => {
  
      describe('SUCCESS :', () => {
  
        it('should answer with a status code 404', () =>
          this.responses[lang].wrong.statusCode.should.equal(404))
  
        it('should answer with a html content-type', () =>
          this.responses[lang].wrong.response.headers['content-type'].should.include('text/html;'))
  
        it('should answer a page body with the id "error"', () =>
          this.responses[lang].wrong.response.body.slice(0, 50)
            .should.include('id="error"'))
  
        it(`should answer a page body with lang set to ${ lang }`, () =>
          this.responses[lang].wrong.response.body.slice(0, 50)
            .should.include(`lang="${ lang }"`))
      })
    })
  })
})