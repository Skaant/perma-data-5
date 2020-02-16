const _chainsProcessor = require('../../../../../app/_patterns/_chains/_processor/_chains.processor')
const _mainChain = require('./_chains/_main/cityActions.main.chain')

module.exports = (
  req,
  res
) =>

  _chainsProcessor(
    _mainChain,
    {
      req,
      res
    }
  )
    .then(data =>

      res
        .json({
          nextBuildings: data.nextBuildings
        }))

    .catch(err => {

      res
        .status(
          err.message[3] === ':'
            ? parseInt(err
              .message
              .slice(0, 3))
          
            : 500
        )
        .send({
          message: err.message,
          stack: err.stack
        })
    })