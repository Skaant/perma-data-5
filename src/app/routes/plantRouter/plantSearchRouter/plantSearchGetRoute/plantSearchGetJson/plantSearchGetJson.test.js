const chai = require('chai')
const proxyquire = require('proxyquire')
const plantSearchGetJson =
  proxyquire(
    './plantSearchGetJson', {
      '../../../../../../mongo/mongo':
        require('../../../../../../mongo/_mock/mongo')
    }
  )

chai.should()

describe('[handler] plantRouter > plantSearchRoute > plantSearchGetRoute > plantSearchGetJson', () => {

  it('should send a valid json object (mocked mongo module)', done => {
    plantSearchGetJson({
      params: {
        searchValue: 'acacia'
      }
    }, {
      json: json => {
        json.should.be.an('object')
        done()
      }
    })
  })
})