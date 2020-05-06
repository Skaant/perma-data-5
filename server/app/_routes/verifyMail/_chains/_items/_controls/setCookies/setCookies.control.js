const ControlChainItem = require('../../../../../../_patterns/_chains/_classes/ControlChainItem/ControlChainItem')

module.exports = new ControlChainItem(
  ({
    res,
    updatedUser
  }) =>

    new Promise(resolve => {

      res.cookie(
        'auth',
        updatedUser.authToken,
        {
          maxAge: 432000000
        }
      )

      resolve({
        res
      })
    }
  )
)