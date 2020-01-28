const atob = require('atob')

module.exports = ({
  req,
  res
}) =>

  new Promise((
    resolve,
    reject
  ) => {

    const { body } = req

    if (!body) {

      reject(Error('400: `body` is required'))
    }

    const {
      email,
      pseudo,
      password
    } = body

    if (!email) {

      reject(Error('400: `body.email` is required'))
    }

    if (!pseudo) {

      reject(Error('400: `body.pseudo` is required'))
    }

    if (!password) {

      reject(Error('400: `body.password` is required'))
    }

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