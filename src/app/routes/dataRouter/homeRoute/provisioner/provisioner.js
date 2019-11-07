const mongo = require('../../../../mongo/mongo')

module.exports =
  userId =>
    new Promise((resolve, reject) =>
      mongo()
        .then(({ client, db }) =>
          db
            .collection('user_buildings')
            .findOne({
              user: userId
            }))
            .then(({ list }) =>
              resolve(list))
        .catch(err =>
          reject(err)))