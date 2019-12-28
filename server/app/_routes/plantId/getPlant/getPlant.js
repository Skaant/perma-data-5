const getPlantIdAggregation = require('./_aggregations/plantId/plantId')

module.exports = (
  db,
  plantId
) =>

  new Promise((resolve, reject) =>

    db
      .collection('data')
      .aggregate(
        getPlantIdAggregation(plantId),
        (err, cursor) => {
          if (err) {
            reject(err)
          }
          cursor
            .next()

            .then(result =>
              resolve(result))

            .catch(err => {
              reject(err)
            })
        }))