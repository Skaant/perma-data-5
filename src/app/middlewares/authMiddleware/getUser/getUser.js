const mongo = require('../../../../mongo/mongo')

/**
 * Returns a promise that resolves with fetched db user
 * 
 * @param { string } username - Authorization username
 * @param { string } password - Authorization password
 */
module.exports = 
  (username, password) =>
    new Promise((resolve, reject) =>
      mongo
        .get()
        .then(({ db }) =>
          db
            .collection('users')
            .findOne({
              username,
              password
            })
            .then(result =>
              resolve(result))
            .catch(err =>
              reject(err))))