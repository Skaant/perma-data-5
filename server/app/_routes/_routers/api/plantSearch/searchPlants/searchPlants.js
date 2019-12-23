const plantSearchAggregation =
  require('./_aggregations/searchPlants/searchPlants')

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
        plantSearchAggregation(searchValue),
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