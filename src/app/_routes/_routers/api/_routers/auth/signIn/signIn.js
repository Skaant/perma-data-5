const atob = require('atob')
const mongo = require('../../../../../../mongo/mongo')
const getUser = require('../_utils/getUser/getUser')
const updateToken = require('../_utils/updateToken/updateToken')
const getUserBuildings = require('../_utils/getUserBuildings/getUserBuildings')

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

                Promise
                  .all([
                    updateToken(
                      db,
                      user._id
                    ),
                    getUserBuildings(
                      db,
                      user._id
                    )
                  ])
                
                  .then(([token, buildings]) => {
                    
                    res.cookie(
                      'auth',
                      token,
                      {
                        maxAge: 432000000
                      }
                    )
                    res.send({
                      user: {
                        pseudo: user.pseudo,
                        buildings
                      }
                    })
                  })
              }
            }
          })
          .catch(error =>{

            console
              .error(error)
            res
              .status(400)
              .json({
                salut: 'ok',
                error
              })})
            })
  }
}