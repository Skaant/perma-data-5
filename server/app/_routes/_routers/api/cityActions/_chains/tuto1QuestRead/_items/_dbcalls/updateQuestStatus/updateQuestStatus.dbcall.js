const mongo = require('../../../../../../../../../../mongo/mongo')

module.exports = {
  name: 'updateQuestStatus.dbcall.js',
  type: 'dbcall',
  action: ({
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
                    buildings: nextBuildings
                  }
                })

              .then(() =>
                
                resolve())

              .catch(err =>
                
                reject(err))))
}