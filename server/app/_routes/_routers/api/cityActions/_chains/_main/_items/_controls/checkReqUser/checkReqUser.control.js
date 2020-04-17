const ControlChainItem = require('../../../../../../../../../../app/_patterns/_chains/_classes/ControlChainItem/ControlChainItem')

module.exports = new ControlChainItem(
  ({
    req
  }) =>

    new Promise((
      resolve,
      reject
    ) => {

      const { user } = req

      if (!user) {

        reject(Error('403: authentication (`user`) is required'))
      }

      const { _id } = user

      if (!_id) {

        reject(Error('500: `user._id` cannot be retrieved'))
      }

      resolve({ user })
    }
  )
)