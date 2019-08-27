const mongo = require('../../../../../../mongo/mongo')
const getPlantSearchAggregation = require('../../../../../../mongo/aggregations/getPlantSearchAggregation/getPlantSearchAggregation')
const jsonRejection = require('../../../../../../utils/handlers/jsonRejection/jsonRejection')

module.exports =
  (req, res) =>
    mongo
      .get()
      .then(({ db }) =>
        db
          .collection('data')
          .aggregate(
            getPlantSearchAggregation(req.params.searchValue),
            (err, cursor) => {
              if (err) {
                jsonRejection(res, err)
              }
              cursor
                .toArray()
                .then(results => 
                  res.json(results))
                .catch(err =>
                  jsonRejection(res, err))
            }))
      .catch(err =>
        jsonRejection(res, err))