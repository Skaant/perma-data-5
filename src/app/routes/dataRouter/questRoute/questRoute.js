const questHandlers = require('./actions')
const jsonRejection = require('../../../../utils/handlers/jsonRejection/jsonRejection')

module.exports = 
  (req, res) => {
    if (!req.user) {
      jsonRejection(
        res,
        'You must be connected in order to retrieve user home data.',
        403)
    }
    questHandlers[req.body.action](
      req.user,
      req.body
    )
      .then(buildings =>
        res
          .json({
            buildings
          }))
      .catch(err =>
        jsonRejection(res, err))}