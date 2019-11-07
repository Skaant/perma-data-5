const mongo = require('../../../../../../mongo/mongo')

module.exports = 
  _id =>
    new Promise((resolve, reject) => {
      mongo()
        .then(({ db }) => {
          db
            .collection('user_buildings')
            .insertOne({
              user: _id,
              list: [{
                key: "kolo-seed",
                state: 0
              }]
            })
            .then(() =>
              resolve())
            .catch(err =>
              reject(err))
        })
    })