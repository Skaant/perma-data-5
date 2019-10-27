const mongo = require('../../../../../mongo/mongo')
const getPlantIdAggregation = require('../../../../../mongo/aggregations/getPlantIdAggregation/getPlantIdAggregation')
const jsonRejection = require('../../../../_routes/api/_utils/error/error')

module.exports =
  (req, res) =>
    mongo
      .get()
      .then(({ db }) =>
        db
          .collection('data')
          .aggregate(
            getPlantIdAggregation(req.params.id),
            (err, cursor) => {
              if (err) {
                jsonRejection(res, err)
              }
              cursor
                .next()
                .then(result => 
                  res.json(result))
                .catch(err =>
                  jsonRejection(res, err))
            }))
      .catch(err =>
        jsonRejection(res, err))