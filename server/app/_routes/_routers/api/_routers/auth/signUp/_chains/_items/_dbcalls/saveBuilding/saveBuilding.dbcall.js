const mongo = require('../../../../../../../../../../../mongo/mongo')
const DbcallChainItem = require('../../../../../../../../../../_patterns/_chains/_classes/DbcallChainItem/DbcallChainItem')

module.exports = new DbcallChainItem(
  __filename,
  ({
    user,
    buildings
  }) =>

    new Promise(
      (
        resolve,
        reject
      ) =>
      
      mongo()

        .then(({ db }) =>

          db
            .collection('user_buildings')
            .insertOne({
              user: user._id,
              buildings 
            })
            .then(() =>

              resolve())

            .catch(err =>

              reject(err)))
    )
)
