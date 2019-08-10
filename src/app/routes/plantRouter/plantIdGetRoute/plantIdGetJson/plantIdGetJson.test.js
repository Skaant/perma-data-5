const chai = require('chai')
const plantIdGetJson = require('./plantIdGetJson')

chai.should()

describe('[handler] plantRouter > plantIdGetRoute > plantIdGetJson', () => {

  it('should send a valid json object', () =>
    plantIdGetJson({
      params: {
        id: 'prunus cerasus'
      }
    }, {
      status: function() { return this },
      json: json =>
        json.should.be.an('object')
    }))
})