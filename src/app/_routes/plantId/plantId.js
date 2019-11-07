const mongo = require('../../mongo/mongo')
const getPlant = require('./getPlant/getPlant')
const updateUserBuildings = require('./updateUserBuildings/updateUserBuildings')
const pug = require('pug')
const errorPage = require('../_utils/errorPage/errorPage')

module.exports = (req, res) => {

  const plantId = req.params.id

  if (!plantId) {

    return errorPage(
      res,
      new Error('A plant id must be given'),
      400)
  }

  mongo
    .get()

    .then(({ db }) =>

      getPlant(
        db,
        plantId)

        .then(({
          data,
          sources
        }) => {

          const plantName =
            data['name,fr'][0].value
            
          const page = pug
            .renderFile(
              './src/app/views/pages/plantId/plantId.pug', 
              {
                titles: {
                  page: plantName,
                  data: 'Données',
                  sources: 'Sources'
                },
                plant: {
                  id: plantId,
                  data,
                  sources
                }
              })

          if (req.user) {

            return updateUserBuildings(
              db,
              req.user._id)

              .then(() => 
              
                res.send(page)
              )

              .catch(err =>
                
                errorPage(
                  res,
                  err))
          }

          return res.send(page)
        })

        .catch(err =>

          errorPage(
            res,
            err)))
}