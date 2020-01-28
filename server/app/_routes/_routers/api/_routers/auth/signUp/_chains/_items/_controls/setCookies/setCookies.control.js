module.exports = ({
  res,
  ...data
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
      res,
      ...data
    })
  })