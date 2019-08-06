const chai = require('chai')
const plantIdGetJson = require('./plantIdGetJson')

chai.should()

describe('[handler] plantRouter > plantIdGetRoute > plantIdGetJson', () => {

  it('should send a valid json object', () =>
    plantIdGetJson({}, {
      json: json =>
        json.should.be.an('object')
    }))
})