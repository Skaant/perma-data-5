const mongo = require('../../../../../../../../../../../mongo/mongo')
const DbcallChainItem = require('../../../../../../../../../../_patterns/_chains/_classes/DbcallChainItem/DbcallChainItem')

module.exports = new DbcallChainItem(
  ({
    updatedUser
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
            .replaceOne(
              { 
                _id: user._id
              },
              updatedUser
            )
            .then(({ modifiedCount }) =>
              
              resolve({ 
                userModifiedCount: modifiedCount
              }))

            .catch(err =>
              
              reject(err)))
    )
)