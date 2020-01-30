const _chainsProcessor = require('../../../../../../_patterns/_chains/_processor/_chains.processor')
const _mainChain = require('./_chains/_main/signUp.main.chain')

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
          user: {
            _id: data
              .user
              ._id,
            pseudo: data
              .user
              .pseudo
          },
          buildings: data.buildings
        }))

    .catch(err => 

      res
        .status(err
          .code
          || 500)
        .send(err))