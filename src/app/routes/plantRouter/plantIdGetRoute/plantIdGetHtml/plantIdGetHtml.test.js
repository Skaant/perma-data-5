const chai = require('chai')
const { JSDOM } = require('jsdom')
const plantIdGetHtml = require('./plantIdGetHtml')

const should = chai.should()

describe('[handler] plantRouter > plantIdGetRoute > plantIdGetHtml', () => {

  it('should send a valid html string.', done =>
    plantIdGetHtml({
      params: {
        id: 'prunus cerasus'
      }
    }, {
      send: html => {
        const dom = new JSDOM(html)
        should.exist(dom.window)
        done()
      }
    }))
})