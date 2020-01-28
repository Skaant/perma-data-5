const visitBuildingsAggregation = require('./_aggregations/visitBuildings/visitBuildings')

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
        visitBuildingsAggregation(userId),
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