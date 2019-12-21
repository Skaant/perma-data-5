const getUser = require('./getUser/getUser')

module.exports = () =>
  
  (req, res, next) => {

    const token = req.cookies['auth']

    if (token) {

      getUser({
        token
      })
        .then(user => {

          if (!user) {

            res
              .clearCookie('auth')
            next()
          }

          req.user = user || false
          next()
        })
        .catch(error => {

          console
            .error(error)
          next()
        })
    } else {
      
      next()
    }
  }