const { MongoClient } = require('mongodb')
const { dbName } = require('./clientConfig.json')
const { uri } = require('./clientSecret.json')

const client = new MongoClient(uri)

/**
 * Get the MongoDB client instance & the on-usage database reference.
 * 
 * @alias module:mongo
 * @promise { { client: MongoClient, db: Db } } - Client & instance
 */
const get = () => 
  new Promise((resolve, reject) => {
    if (!client.isConnected()) {
      client.connect(err => {
        if (err) {
          reject(err)
        }
        if (client.isConnected()) {
          resolve({
            client,
            db: client
              .db(dbName)
          })
        }
      })
    } else {
      resolve({
        client,
        db: client
          .db(dbName)
      })
    }
  })
 
/**
 * @exports mongo Module for database iteraction
 */
module.exports = {
  get
}