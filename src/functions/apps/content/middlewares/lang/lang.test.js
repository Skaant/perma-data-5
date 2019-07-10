const chai = require('chai')
const sinon = require('sinon')
const lang = require('./lang')

describe('firebase functions - [lang middleware]', () => {

  it('should call the next() method', () => {
    let req = {
      path: '/fr/anyway'
    }
    const nextSpy = sinon.spy()
    lang(req, null, nextSpy)
    nextSpy.calledOnce.should.be.true
  })

  it('should set the req lang property to the first url component', () => {
    let req = {
      path: '/fr/anyway'
    }
    const nextSpy = sinon.spy()
    lang(req, null, nextSpy)
    req.lang.should.equal('fr')
  })
})