const mongo = require('../../../../../mongo/mongo')
const getPlantIdAggregation = require('../../../../../mongo/aggregations/getPlantIdAggregation/getPlantIdAggregation')
const htmlRejection = require('../../../../../utils/handlers/htmlRejection/htmlRejection')

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
                htmlRejection(res, err)
              }
              cursor
                .next()
                .then(result => 
                  res.send('<html>'
                  + '<h1>Le nom de la plante</h1>'
                  + '<p>'
                  + JSON.stringify(result)
                  + '</p>'
                  + '</html>'))
                .catch(err =>
                  htmlRejection(res, err))
            }))
      .catch(err =>
        htmlRejection(res, err))