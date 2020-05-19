const atob = require('atob')
const ControlChainItem = require('../../../../../../../../../../_patterns/_chains/_classes/ControlChainItem/ControlChainItem')
const createToken = require('../../../../../../../../../_utils/createToken/createToken')

module.exports = new ControlChainItem(
  ({
    body
  }) =>

    new Promise(resolve => {

      const {
        email,
        pseudo,
        password
      } = body

      resolve({
        user: {
          email,
          pseudo,
          password: password,
          inscription: Date.now(),
          verified: false,
          verificationToken: createToken()
        }
      })
    }
  )
)