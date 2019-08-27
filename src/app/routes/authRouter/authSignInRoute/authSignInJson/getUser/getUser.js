const mongo = require('../../../../../../mongo/mongo')

/**
 * Returns a promise that, given an user email,
 *  resolves with fetched db user, if any.
 * 
 * @param { string } email Supposed user email
 * 
 * @returns { User } Matching email user database entry
 */
module.exports = 
  query =>
    new Promise((resolve, reject) =>
      mongo
        .get()
        .then(({ db }) =>
          db
            .collection('users')
            .findOne(query)
            .then(result =>
              resolve(result))
            .catch(err =>
              reject(err))))