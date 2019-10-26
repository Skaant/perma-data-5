const mongo = require('../../../../../../mongo/mongo')
const jsonRejection = require('../../../../../../utils/handlers/jsonRejection/jsonRejection')
const searchPlants = require('./searchPlants/searchPlants')
const updateUserBuildings = require('./updateUserBuildings/updateUserBuildings')

module.exports = (req, res) =>

  mongo
    .get()
    .then(({ db }) => {

      const searchValue = req.params.searchValue

      if (!searchValue) {

        jsonRejection(
          res,
          new Error('`searchValue` must be set'),
          400)
      }

      searchPlants(
        db,
        searchValue)

        .then(results => {

          if (req.user) {

            updateUserBuildings(
              db,
              req.user._id)

              .then(buildings => 
                
                res.json({
                  results,
                  buildings
                }))

              .catch(err => 
                
                jsonRejection(
                  res,
                  err))
          } else {

            res.json({ results })
          }
        })

        .catch(err => 
          
          jsonRejection(
            res,
            err))
    })
    .catch(err =>
      jsonRejection(res, err))