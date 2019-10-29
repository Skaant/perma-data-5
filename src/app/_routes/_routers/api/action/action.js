const actions = require('./_actions')
const error = require('../_utils/error/error')

module.exports = 
  (req, res) => {
    if (!req.user) {
      error(
        res,
        'You must be connected in order to retrieve action data.',
        403)
    }
    actions[req.body.action](
      req.user,
      req.body
    )
      .then(result =>
        res
          .json(result))
      .catch(err =>
        error(res, err))
  }