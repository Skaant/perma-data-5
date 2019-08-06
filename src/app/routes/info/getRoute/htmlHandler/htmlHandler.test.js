const chai = require('chai')
const { JSDOM } = require('jsdom')
const htmlHandler = require('./htmlHandler')

const should = chai.should()

describe('[handler] /info > getRoute > htmlHandler', () => {

  it('should send a valid html string.', done =>
    htmlHandler({}, {
      send: html => {
        const dom = new JSDOM(html)
        should.exist(dom.window)
        done()
      }
    }))
})