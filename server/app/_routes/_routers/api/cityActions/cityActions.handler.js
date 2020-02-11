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
    .then(({ user }) => {

      console.log(user)

      return res
        .json(user)  
    })

    .catch(err => 

      res
        .status(err.code
          || 500)
        .send(err))