const _chainsProcessor = require('../../_patterns/_chains/_processor/_chains.processor')
const _mainChain = require('./_chains/_main/verifyMail.main.chain')

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
    .then(() => 

      res.redirect('/'))

    .catch(err => 
      
      res.status(err.code || 500)
        .json({
          message: err.message
        }))