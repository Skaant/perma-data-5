const chai = require('chai')
chai.should()

const app = require('./app')

describe('[express APP] app', () => 

  it('should exist.', () => {
    app.should.exist
  })
)