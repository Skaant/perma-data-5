const mongo = require('../../../../../../../../mongo/mongo')
const createToken = require('../../../../../../_utils/createToken/createToken')

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
      
      const authToken = createToken()
    
      db
        .collection('users')
        .updateOne({
          _id
        }, {
          $set: {
            authToken
          }
        })
        .then(() =>

          resolve(authToken))
          
        .catch(err =>

          reject(err))
  })