const chai = require('chai')
const uriResolver = require('./uriResolver')

chai.should()

describe('[utility] mongo > uriResolver', () => {

  it('should replace "<username>:<password>" in URI with given values', () => {
    const uri = uriResolver(
      'any given string with <username>:<password> content',
      'my-username',
      'my-password'
    )

    uri
      .should.equal('any given string with my-username:my-password content')
  })
})