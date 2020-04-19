const ControlChainItem = require('../../../../../../_patterns/_chains/_classes/ControlChainItem/ControlChainItem')
const createToken = require('../../../../../_utils/createToken/createToken')

module.exports = new ControlChainItem(
  ({ user }) =>

    new Promise(resolve => {

      const updatedUser = {
        ...user,
        verified: Date.now(),
        authToken: createToken()
      }

      delete updatedUser['verificationToken']

      resolve({ updatedUser })
    }
  )
)