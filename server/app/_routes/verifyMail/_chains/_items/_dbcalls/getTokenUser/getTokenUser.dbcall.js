const mongo = require('../../../../../../../mongo/mongo')
const DbcallChainItem = require('../../../../../../_patterns/_chains/_classes/DbcallChainItem/DbcallChainItem')

module.exports = new DbcallChainItem(
  ({
    query
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
            .find({
              verificationToken: query.token
            })
            .next()
            .then(user =>

              resolve({ user }))

            .catch(err =>

              reject(err)))

          .catch(err =>
            
            reject(err))
    )
)