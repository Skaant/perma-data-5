const getSearchBuildings = require('./getSearchBuildings/getSearchBuildings')
const updateKoloTrunkSearches = require('./updateKoloTrunkSearches/updateKoloTrunkSearches')


module.exports = (
  db,
  userId
) => 
  
  new Promise((
    resolve,
    reject
  ) => {

    getSearchBuildings(
      db,
      userId)

      .then(result => {

        if (result['kolo-trunk']
          && result['kolo-trunk']['state'] === 1) {

          updateKoloTrunkSearches(
            db,
            userId,
            result['kolo-trunk']['index']
          )

            .then(result =>
              
              resolve(result))
            
            .catch(err =>
              
              reject(err))
        }
      })
    
      .catch(err =>
        
        reject(err))
  })