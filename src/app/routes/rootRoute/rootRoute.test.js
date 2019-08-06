const chai = require('chai')
const { JSDOM } = require('jsdom')
const rootRoute = require('./rootRoute')

const should = chai.should()

describe('[handler] rootRoute', () => {

  it('should send a valid html string', done =>
    rootRoute({}, {
      send: html => {
        const dom = new JSDOM(html)
        should.exist(dom.window)
        done()
      }
    }))
})