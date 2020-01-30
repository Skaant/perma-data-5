const atob = require('atob')

module.exports = ({
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