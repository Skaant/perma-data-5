const mongo = require('../../../../../../../mongo/mongo')

module.exports =
  user =>
    new Promise((resolve, reject) =>
      mongo
        .get()
        .then(({ client, db }) => 
          db
            .collection('user_buildings')
            .findOne({
              user: user._id
            })
            .then(({ list }) => {
              
              // Find the KOLO-SEED with state ready [= 1]
              const index = list
                .findIndex(building =>
                  building.id === 'kolo-seed'
                    && building.state === 1)
              
              if (index === -1) {
                reject({
                  message: 'Unavailable action'
                })
              }

              // Update to next state
              list.splice(index, 1, {
                id: 'kolo-trunk',
                state: 0
              }, {
                id: 'arkeo-vault',
                state: 0
              })

              db
                .collection('user_buildings')
                .updateOne({
                  user: user._id
                }, { 
                  $set: {
                    list
                  }
                })
                .then(() =>
                  resolve(list))
                .catch(err =>
                  reject(err))
            })
        .catch(err =>
          reject(err))))