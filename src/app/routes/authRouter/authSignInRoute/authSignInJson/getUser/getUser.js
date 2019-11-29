const mongo = require('../../../../../mongo/mongo')

/**
 * Returns a promise that, given a query,
 *  resolves with fetched db user, if any.
 * 
 * @param { object } query User query
 * 
 * @returns { User } Matching query user database entry
 */
module.exports = 
  query =>
    new Promise((resolve, reject) =>
      mongo()
        .then(({ db }) =>
          db
            .collection('users')
            .findOne(query)
            .then(result =>
              resolve(result))
            .catch(err =>
              reject(err))))