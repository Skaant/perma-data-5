const questHandlers = require('./actions')
const jsonRejection = require('../../../_routes/api/_utils/error/error')

module.exports = 
  (req, res) => {
    if (!req.user) {
      jsonRejection(
        res,
        'You must be connected in order to retrieve action data.',
        403)
    }
    questHandlers[req.body.action](
      req.user,
      req.body
    )
      .then(result =>
        res
          .json(result))
      .catch(err =>
        jsonRejection(res, err))
  }