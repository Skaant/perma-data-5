const chai = require('chai')
const infoGetJson = require('./infoGetJson')

chai.should()

describe('[handler] infoRouter > infoGetRoute > infoGetJson', () => {

  it('should send a valid json object', () =>
  infoGetJson({}, {
      json: json =>
        json.should.be.an('object')
    }))
})