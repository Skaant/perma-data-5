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
              //  & (searches & visits) > 0
              const index = list
                .findIndex(building =>
                  building.id === 'kolo-trunk'
                    && building.state === 1
                    && building.searches > 0
                    && building.visits > 0)
              
              if (index === -1) {
                reject({
                  message: 'Unavailable action'
                })
              }

              const koloTrunk = list[index] 
              const {
                searches,
                visits
              } = koloTrunk

              // Update to next state
              list[index].state = 2

              list.push({
                id: 'mikor-rayon',
                searches
              }, {
                id: 'nov-rayon',
                visits
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