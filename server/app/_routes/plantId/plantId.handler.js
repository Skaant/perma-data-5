const mongo = require('../../../mongo/mongo')
const getPlant = require('./getPlant/getPlant')
const updateUserBuildings = require('./updateUserBuildings/updateUserBuildings')
const pug = require('pug')
const errorPage = require('../../_utils/errorPage/errorPage')

module.exports = (req, res) => {

  const plantId = req.params.id

  if (!plantId) {

    return errorPage(
      res,
      new Error('A plant id must be given'),
      400
    )
  }

  mongo()

    .then(({ db }) =>

      getPlant(
        db,
        plantId)

        .then(({
          data,
          sources
        }) => {
            
          console.log(data['name,fr'])

          const page = pug
            .renderFile(
              './server/views/pages/plantId/plantId.pug', 
              {
                titles: {
                  page: data['name,fr'][0].value
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

              .then(() => {
              
                return res.send(page)
              })

              .catch(err =>
                
                errorPage(
                  res,
                  err))
          } else {

            return res.send(page)
          }
        })

        .catch(err =>

          errorPage(
            res,
            err)))
}