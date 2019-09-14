const mongo = require('../../../../../mongo/mongo')

module.exports =
  userId =>
    new Promise((resolve, reject) =>
      mongo
        .get()
        .then(({ client, db }) =>
          db
            .collection('user_doms')
            .findOne({
              _id: userId
            }))
            .then(({ list }) => 
              resolve(list))
        .catch(err =>
          reject(err)))