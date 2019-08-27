const getUser = require('./getUser/getUser')

module.exports = (req, res, next) => {
  const token = req.cookies['auth-token']
  const email = req.cookies['auth-email']

  if (token && email) {
    getUser({
      token,
      email
    })
      .then(user => {
        req.user = user || false
        next()
      })
      .catch(err =>
        req
          .status(400)
          .send(err))
  } else {
    next()
  }
}