const chai = require('chai')
const jsonHandler = require('./jsonHandler')

chai.should()

describe('[handler] /info > getRoute > jsonHandler', () => {

  it('should send a valid json object', () =>
    jsonHandler({}, {
      json: json =>
        json.should.be.an('object')
    }))
})