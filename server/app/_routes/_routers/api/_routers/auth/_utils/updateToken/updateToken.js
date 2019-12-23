const mongo = require('../../../../../../../../mongo/mongo')

/**
 * Returns a promise that creates a new token,
 *  stores it in a database user property
 *  and then returns it.
 * 
 * @param { string } email User email
 * @param { string } password User password
 * 
 * @returns { string } The up-to-date token
 */
module.exports = 
  (
    db,
    _id
  ) =>
    new Promise((resolve, reject) => {
      
      const token = Math
        .random().toString(36).substr(2)
    
      db
        .collection('users')
        .updateOne({
          _id
        }, {
          $set: {
            token
          }
        })
        .then(() =>

          resolve(token))
        .catch(err =>

          reject(err))
  })