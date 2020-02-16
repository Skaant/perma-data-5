const ControlChainItem = require('../../../../../../../../../../_patterns/_chains/_classes/ControlChainItem/ControlChainItem')

module.exports = new ControlChainItem(
  __filename,
  ({
    res,
    user
  }) =>

    new Promise(resolve => {

      res.cookie(
        'auth',
        user.token,
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