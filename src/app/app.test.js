const chai = require('chai')
chai.should()

const app = require('./app')

describe('[EXPRESS] app', () => 

  it('Should exist', () => {
    app.should.exist
  })
)