const mongo = require('../../../../mongo/mongo')

/**
 * Returns a promise that resolves with fetched db user
 * 
 * @param { string } username - Authorization username
 * @param { string } password - Authorization password
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