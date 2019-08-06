const chai = require('chai')
const { JSDOM } = require('jsdom')
const infoGetHtml = require('./infoGetHtml')

const should = chai.should()

describe('[handler] infoRouter > ingoGetRoute > infoGetHtml', () => {

  it('should send a valid html string.', done =>
    infoGetHtml({}, {
      send: html => {
        const dom = new JSDOM(html)
        should.exist(dom.window)
        done()
      }
    }))
})