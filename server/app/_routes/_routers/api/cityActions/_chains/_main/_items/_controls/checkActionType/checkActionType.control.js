/** cityActions _chains index */
const cityActionsChains = require('../../../../')

module.exports = {
  type: 'control',
  action: ({
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

      if (!cityActionsChains[type]) {

        reject(Error(`404: \`${ type }\` doesn't refer to an exposed server action`))
      }

      resolve({ type })
    }
  )
}