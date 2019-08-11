const chai = require('chai')
// const mongo = require('./mongo')

chai.should()

describe('[utils] mongo #e2e', () => {

  it('should exists', () => 
    mongo.should.exist)

  describe('[method] get', () => {

    it('should return a database connection', done => {
      mongo
        .get()
        .then(({ 
          client, 
          db
        }) => {
          db.should.exist
          client.close()
          done()
        })
    })
  })
})