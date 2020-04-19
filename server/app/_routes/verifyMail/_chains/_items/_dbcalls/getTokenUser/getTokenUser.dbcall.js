const mongo = require('../../../../../../../mongo/mongo')
const DbcallChainItem = require('../../../../../../_patterns/_chains/_classes/DbcallChainItem/DbcallChainItem')

module.exports = new DbcallChainItem(
  ({
    body
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
              verificationToken: body.token
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