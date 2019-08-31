const mongo = require('../../../../../../mongo/mongo')

/**
 * Returns a promise that, given an user object,
 *  resolves by making it persists in db.
 * 
 * @param { object } user Provisioned user object
 * 
 * @returns { ObjectId } New entry _id
 */
module.exports = 
  user =>
    new Promise((resolve, reject) =>
      mongo
        .get()
        .then(({ db }) =>
          db
            .collection('users')
            .insertOne(user)
            .then(result =>
              resolve(result))
            .catch(err =>
              reject(err))))