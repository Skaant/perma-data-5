const mongo = require('../../../../../mongo/mongo')
const pug = require('pug')
const getPlantIdAggregation = require('../../../../../mongo/aggregations/getPlantIdAggregation/getPlantIdAggregation')
const htmlRejection = require('../../../../../utils/handlers/htmlRejection/htmlRejection')

module.exports = 
  (req, res) => {
    const { id } = req.params
    mongo
      .get()
      .then(({ db }) =>
        db
          .collection('data')
          .aggregate(
            getPlantIdAggregation(id),
            (err, cursor) => {
              if (err) {
                htmlRejection(res, err)
              }
              cursor
                .next()
                .then(({ data, sources }) => {
                  const plantName =
                    data['name,fr'][0].value
                  res
                    .send(pug
                      .renderFile(
                        './src/app/views/pages/plantId/plantId.pug', 
                        {
                          titles: {
                            page: plantName,
                            data: 'Données',
                            sources: 'Sources'
                          },
                          plant: {
                            id,
                            data,
                            sources
                          }
                        }))
                      })
                .catch(err =>
                  htmlRejection(res, err))
            }))
      .catch(err =>
        htmlRejection(res, err))}