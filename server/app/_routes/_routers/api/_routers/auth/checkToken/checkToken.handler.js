const mongo = require('../../../../../../../mongo/mongo')
const getUserBuildings = require('../_utils/getUserBuildings/getUserBuildings')

module.exports = (
  req,
  res
) => {

  if (req.user) {

    const {
      _id,
      pseudo
    } = req.user

    mongo()
      
      .then(({ db }) => 
      
        getUserBuildings(
          db,
          _id
        )
          .then(buildings => {

            res
              .json({
                pseudo,
                buildings
              })
          })
          
          .catch(error => 
            
            res
              .status(500)
              .json({ error })))

      .catch(error => 
    
        res
          .status(500)
          .json({ error }))

  } else {

    res
      .status(403)
      .json({
        error: req.cookies['auth'] ?
          'Unable to get user data using given token'
          : 'Cannot retrieve the token. You may not be connected ?'
      })
  }
}