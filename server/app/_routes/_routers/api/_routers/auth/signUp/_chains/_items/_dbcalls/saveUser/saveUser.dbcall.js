const mongo = require('../../../../../../../../../../../mongo/mongo')
const DbcallChainItem = require('../../../../../../../../../../_patterns/_chains/_classes/DbcallChainItem/DbcallChainItem')

module.exports = new DbcallChainItem(
  __filename,
  ({
    user
  }) =>

    new Promise(
      (
        resolve,
        reject
      ) =>
      
      mongo()

        .then(({ db }) =>

          db
            .collection('users')
            .insertOne(user)
            .then(({ insertedId }) =>
              
              resolve({
                user: {
                  _id: insertedId,
                  ...user
                }
              }))

            .catch(err =>
              
              reject(err)))
    )
)
