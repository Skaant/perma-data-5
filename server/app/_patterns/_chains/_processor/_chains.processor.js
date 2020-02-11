const recursive = (
  chain,
  data
) =>
  
  new Promise((
    resolve,
    reject
  ) => {

  if (chain[0]) {

    chain[0]
      .action(data)

      // the `_data` type depends on the chain item `type`
      .then(_data => {

        switch (chain[0].type) {

          // `_data` is an effective data object
          case 'control':
          case 'dbaccess':

            const nextData = Object
              .assign(
                {},
                data,
                _data
              )
            
            return recursive(
              chain
                .slice(1),
              nextData
            )
            
              .then(data =>
                
                resolve(data))

              .catch(err =>
                
                reject(err))

          case 'switch':
            
            // `_data` is a new chain
            return recursive(
              _data,
              data
            )

              .then(data =>
                
                resolve(data))

              .catch(err =>
                
                reject(err))
        }
      })

      .catch(err =>
        
        reject(err))
  
  } else {

    console.log(Object.keys(data))

    resolve(data)
  }
})

module.exports = recursive