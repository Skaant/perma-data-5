const chai = require('chai')
const proxyquire = require('proxyquire')
const plantIdGetJson = proxyquire(
  './plantIdGetJson', {
    '../../../../../mongo/mongo': require('../../../../../mongo/_mock/mongo')
  })

chai.should()

describe('[handler] plantRouter > plantIdGetRoute > plantIdGetJson', () => {

  it('should send a valid json object (mocked mongo module)', done => {
    plantIdGetJson({
      params: {
        id: 'prunus cerasus'
      }
    }, {
      json: json => {
        json.should.be.an('object')
        done()
      }
    })
  })
})