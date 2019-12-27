const actions = require('./_actions')
const error = require('../_utils/error/error')

module.exports = 
  (req, res) => {

    if (!req.user) {
      return error(
        res,
        'You must be connected in order to retrieve action data.',
        403)
    }

    const action = actions[req.body.action]

    if (!action) {
      return error(
        res,
        `Target "${ req.body.action }" action doesn't exist.`,
        400)
    }

    return action(
      req.user,
      req.body
    )
      .then(({
        status,
        ...results
      }) => {

        res
          .status(status || 200)
          .json(results)}
      )
      .catch(err =>

        error(
          res,
          err
        )
      )
  }