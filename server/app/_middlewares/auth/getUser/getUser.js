const mongo = require('../../../../mongo/mongo')

/**
 * Returns a promise that resolves with fetched db user
 * 
 * @param array query - A mongo request selector object
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