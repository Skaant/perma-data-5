const getPlantSearchAggregation = require('./getPlantSearchAggregation/getPlantSearchAggregation')

module.exports = (
  db,
  searchValue
) =>

  new Promise((
    resolve,
    reject
  ) => {

    db
      .collection('data')
      .aggregate(
        getPlantSearchAggregation(searchValue),
        (err, cursor) => {

          if (err) {

            reject(res, err)
          }
          cursor
            .toArray()
            .then(results =>

              resolve(results))

            .catch(err =>

              reject(res, err))
        })
  })