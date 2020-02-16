const atob = require('atob')
const ControlChainItem = require('../../../../../../../../../../_patterns/_chains/_classes/ControlChainItem/ControlChainItem')

module.exports = new ControlChainItem(
  __filename,
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
          password: atob(password),
          token: Math
            .random()
            .toString(36)
            .substr(2)
        }
      })
    }
  )
)