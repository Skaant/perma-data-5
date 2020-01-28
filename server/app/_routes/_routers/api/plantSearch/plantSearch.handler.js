const mongo = require('../../../../../mongo/mongo')
const error = require('../_utils/error/error')
const searchPlants = require('./searchPlants/searchPlants')
const updateUserBuildings = require('./updateUserBuildings/updateUserBuildings')

module.exports = (req, res) => {

  const searchValue = req.query.searchValue

  if (!searchValue) {

    error(
      res,
      new Error('`searchValue` must be set'),
      400)
  }

  mongo()

    .then(({ db }) => {

      searchPlants(
        db,
        searchValue)

        .then(plants => {

          if (req.user) {

            updateUserBuildings(
              db,
              req.user._id)

              .then(buildings => 
                
                res.json({
                  plants,
                  buildings
                }))

              .catch(err => 
                
                error(
                  res,
                  err))
          } else {

            res.json({
              plants
             })
          }
        })

        .catch(err => 
          
          error(
            res,
            err))
    })

    .catch(err =>

      error(res, err))

}