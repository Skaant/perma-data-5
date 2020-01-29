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
              .then(data =>{

                console.log(Objet.keys(data))
                
                return chainLink(data)})
              
              .catch(({
                message,
                ...err
              }) => {

                if (message[3] === ':') {

                  const splitErr = message
                    .split(': ')

                  res
                    .status(splitErr[0])
                    .send({
                      message: splitErr[1],
                      ...err
                    })

                } else {

                  res
                    .status(500)
                    .send({
                      message,
                      ...err
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