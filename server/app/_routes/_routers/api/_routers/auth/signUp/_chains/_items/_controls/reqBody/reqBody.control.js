module.exports = ({
  req
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
      body
    })
  }
)