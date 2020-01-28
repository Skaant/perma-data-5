const atob = require('atob')
const mongo = require('../../../../../../../mongo/mongo')
const createUser = require('./createUser/createUser')
const initBuildings = require('./initBuildings/initBuildings')
const _mainChain = require('./_chains/_main/signUp.main.chain')

module.exports = (
  req,
  res
) => {

  /**
   * Prototype of the future `_chains` processor
   */
  const processor = _mainChain
    .reduce(
      (
        acc,
        chainLink
      ) =>

        acc
          && acc
            .then(data =>
              
              chainLink(data))
            
            .catch(err => {

              const splitErr = err
                .split(': ')

              res
                .status(splitErr[0])
                .send({
                  message: splitErr[1]
                })

              acc = false
            }),
      Promise
        .resolve({
          req,
          res
        })
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