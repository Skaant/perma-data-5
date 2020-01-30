const recursive = (
  chain,
  data
) =>
  
  new Promise((
    resolve,
    reject
  ) => {

  if (chain[0]) {

    chain[0](data)
      .then(_data => {

        const nextData = Object
          .assign(
            {},
            data,
            _data
          )
        
        recursive(
          chain
            .slice(1),
          nextData
        )
          .then(data =>
            
            resolve(data))

          .catch(err =>
            
            reject(err))
      })

      .catch(err =>
        
        reject(err))
  
  } else {

    resolve(data)
  }
})

module.exports = recursive