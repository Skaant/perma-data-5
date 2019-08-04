const chai = require('chai')
chai.should()

const app = require('./index')

describe('[EXPRESS] index app', () => 

  it('Should exist', () =>
    app.should.exist)
)