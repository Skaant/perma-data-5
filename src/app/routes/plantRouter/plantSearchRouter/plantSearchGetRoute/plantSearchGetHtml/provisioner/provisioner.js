const mongo = require('../../../../../../mongo/mongo')
const getPlantIdAggregation = require('../../../../../../mongo/aggregations/getPlantIdAggregation/getPlantIdAggregation')

module.exports =
  id =>
    new Promise((resolve, reject) =>
      mongo
        .get()
        .then(({ client, db }) =>
          db
            .collection('data')
            .aggregate(
              getPlantIdAggregation(id),
              (err, cursor) => {
                if (err) {
                  client.close()
                  reject(err)
                }
                cursor
                  .next()
                  .then(result =>
                    resolve(result))
                  .catch(err => {
                    client.close()
                    reject(err)
                  })
              }))
        .catch(err =>
          reject(err)))