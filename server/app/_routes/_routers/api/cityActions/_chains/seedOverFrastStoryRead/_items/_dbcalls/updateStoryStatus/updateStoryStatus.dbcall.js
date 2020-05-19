const mongo = require('../../../../../../../../../../mongo/mongo')
const DbcallChainItem = require('../../../../../../../../../../app/_patterns/_chains/_classes/DbcallChainItem/DbcallChainItem')

module.exports = new DbcallChainItem(
  ({
    user,
    nextBuildings
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

              .updateOne(
                {
                  user: user._id
                },
                {
                  $set: {
                    ...Object.entries(nextBuildings)

                      .reduce((
                        acc,
                        [ id, building ]
                      ) => {
                      
                        acc[`buildings.${ id }`] = building
                        
                        return acc
                      },
                      {})

                  }
                })

              .then(() =>
                
                resolve())

              .catch(err =>
                
                reject(err))))
)