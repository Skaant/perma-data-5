const { MongoClient } = require('mongodb')
const {
  hostname,
  database
} = require('./mongo.config')
const {
  username,
  password
} = require('./mongoSecret.config')

const client = new MongoClient(
  `mongodb+srv://${ username }:${ password }@${ hostname }/test?retryWrites=true&w=majority`, 
  {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })

/**
 * Get the MongoDB client instance & the on-usage database reference.
 * 
 * @alias module:mongo
 * @promise { { client: MongoClient, db: Db } } - Client & instance
 */
module.exports = (close = false) =>

  close ?
    client.close()

    : new Promise((resolve, reject) => {

      if (!client.isConnected()) {

        client.connect(err => {

          if (err) {
            reject(err)
          }

          resolve({
            client,
            db: client.db(database)
          })
        })

      } else {

        resolve({
          client,
          db: client.db(database)
        })
      }
    })