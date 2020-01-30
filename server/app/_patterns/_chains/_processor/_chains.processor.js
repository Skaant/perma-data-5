module.exports = (
  chain,
  data
) =>

  new Promise(
    (
      resolve,
      reject
    ) =>

    resolve(
      chain
        .reduce(
          (
            acc,
            chainLink
          ) =>

            acc
              && acc
                .then(data => 
                  
                  chainLink(Object
                    .assign(
                      {},
                      acc,
                      data
                    )))
                
                .catch(err =>
                  
                  reject(err)),
          Promise
            .resolve(data)
        )
    )
  )