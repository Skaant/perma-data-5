const cityActionsChains = require('../../../')

module.exports = ({
  req
}) =>

  new Promise((
    resolve,
    reject
  ) => {

    const { body } = req

    if (!body) {

      reject(Error('400: `body` is required'))
    }

    const { type } = body

    if (!type) {

      reject(Error('400: `body.type` is required'))
    }

    console.log(cityActionsChains)

    resolve({ type })
  }
)