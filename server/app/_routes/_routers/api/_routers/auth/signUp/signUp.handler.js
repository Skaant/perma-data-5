const _mainChain = require('./_chains/_main/signUp.main.chain')

module.exports = (
  req,
  res
) => {

  /**
   * Prototype of the future `_chains` processor
   */
  const processor = chain =>
    chain
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

    processor(_mainChain)

      .then(data => 
        
        data
          ? res
            .json(data)
            
          : res)
}