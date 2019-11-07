const atob = require('atob')
const mongo = require('../../../../../../mongo/mongo')
const getUser = require('../_utils/getUser/getUser')

module.exports = (
  req,
  res
) => {

  if (!req.body
      || !req.body.email
      || !req.body.password) {

    res
      .status(400)
      .json({
        error: 'You must provide an email & a password.'
      })

  } else {

    const {
      email,
      password: encryptedPassword
    } = req.body

    const password = atob(encryptedPassword)

    mongo()

      .then(({ db }) => {
        
        getUser(
          db,
          { email }
        )

          .then(user => {

            if (!user) {

              res
                .status(404)
                .send({
                  message: 'User "'
                    + email
                    + '" cannot be found'
                })

            } else {

              if (user.password !== password) {

                res
                  .status(403)
                  .send({
                    message: 'Incorrect password for given user "'
                      + email
                      + '".'
                  })

              } else {

                res.json(user)

                /* updateToken(user._id)
                  .then(token => {
                    res.cookie(
                      'auth-token',
                      token,
                      {
                        maxAge: 432000000
                      }
                    )
                    res.cookie(
                      'auth-email',
                      email,
                      {
                        maxAge: 432000000
                      }
                    )
                    res.send({
                      signIn: true
                    })
                  }) */
              }
            }
          })
          .catch(err =>{
            console.log(err)
            res
              .status(400)
              .json({
                salut: 'ok',
                err
              })})
            })
  }
}