const chai = require('chai')
const mongo = require('./mongo')

chai.should()

describe('[utils] mongo', () => {

  it('should exists', () => 
    mongo.should.exist)

  describe('[method] get   #mongodb-atlas', () => {

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