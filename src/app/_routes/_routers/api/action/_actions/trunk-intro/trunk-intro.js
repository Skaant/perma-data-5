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
              
              // Find the KOLO-TRUNK with initial state [= 0]
              const index = list
                .findIndex(building =>
                  building.id === 'kolo-trunk'
                    && building.state === 0)
                    
              if (index === -1) {
                reject({
                  message: 'Unavailable action'
                })
              }

              // Update to next state
              list[index].state = 1
              list[index].searches = 0
              list[index].visits = 0

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