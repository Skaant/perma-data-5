const mongo = require('../../../../../../mongo/mongo')
const initBuildings = require('./initBuildings/initBuildings')

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
            .then(({ insertedId }) =>
              initBuildings(insertedId)
                .then(() =>
                  resolve(result)))
            .catch(err =>
              reject(err))))