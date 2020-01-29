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

                if (err
                  .message[3] === ':') {

                  const splitErr = err
                    .message
                    .split(': ')

                  res
                    .status(splitErr[0])
                    .send({
                      message: splitErr[1]
                    })

                } else {

                  res
                    .status(500)
                    .send({
                      message: err
                        .message
                    })
                }

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