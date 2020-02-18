const { MongoClient } = require('mongodb')
const uriResolver = require('./uriResolver/uriResolver')
const {
  uri,
  dbName,
  username,
  password
} = require('./mongo.config')

const client = new MongoClient(
  uriResolver(
    uri,
    username,
    password
  ), {
  useNewUrlParser: true,
  useUnifiedTopology: true
})

/**
 * Get the MongoDB client instance & the on-usage database reference.
 * 
 * @alias module:mongo
 * @promise { { client: MongoClient, db: Db } } - Client & instance
 */
module.exports = () =>

  new Promise((resolve, reject) => {

    if (!client.isConnected()) {

      client.connect(err => {

        if (err) {
          reject(err)
        }

        resolve({
          client,
          db: client
            .db(dbName)
        })
      })

    } else {

      resolve({
        client,
        db: client
          .db(dbName)
      })
    }
  })