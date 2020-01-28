const atob = require('atob')

module.exports = ({
  req,
  res
}) =>

  new Promise(resolve => {

    const { body } = req

    const {
      email,
      pseudo,
      password
    } = body

    resolve({
      req,
      res,
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