const atob = require('atob')
const mongo = require('../../../../../../mongo/mongo')
const createUser = require('./createUser/createUser')
const initBuildings = require('./initBuildings/initBuildings')

module.exports = 
  (
    req,
    res
  ) => {

    if (!req.body
        || !req.body.email
        || !req.body.password) {

      res
        .status(400)
        .send({
          error: 'You must provide an email & a password.'
        })

    } else {

      const {
        email,
        pseudo = 'anonymex',
        password: encryptedPassword
      } = req.body

      const user = {
        email,
        pseudo,
        password: atob(encryptedPassword),
        token: Math
          .random().toString(36).substr(2)
      }

      mongo()

        .then(({ db }) => {

          createUser(
            db,
            user
          )
            .then(_id => {

              res.cookie(
                'auth',
                user.token,
                {
                  maxAge: 432000000
                }
              )

              initBuildings(
                db,
                _id
              )
                .then(buildings => {

                  res.json({
                    pseudo: user.pseudo,
                    buildings
                  })
                })
                .catch(error => {

                  res
                    .status(500)
                    .json({ error })
                })
            })
            .catch(error =>
              res
                .status(500)
                .send({ error }))
            })
    }
  }