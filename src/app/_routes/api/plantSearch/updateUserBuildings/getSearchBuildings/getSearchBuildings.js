const searchBuildingsAggregation = require('./_aggregations/searchBuildings/searchBuildings')

module.exports = (
  db,
  userId
) => 

  new Promise((
    resolve,
    reject
  ) => {
    
    db
      .collection('user_buildings')
      .aggregate(
        searchBuildingsAggregation(userId),
        (err, cursor) => {

          if (err) {

            reject(res, err)
          }
          cursor
            .toArray()
            .then(results =>

              resolve(results
                .reduce((
                  acc,
                  { id, ...props }
                ) => {

                  acc[id] = props
                  return acc
                },
                {})))

            .catch(err =>

              reject(res, err))
        })
  
  })