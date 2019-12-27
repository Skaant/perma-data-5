const getVisitBuildings = require('./getVisitBuildings/getVisitBuildings')
const updateKoloTrunkVisits = require('./updateKoloTrunkVisits/updateKoloTrunkVisits')

module.exports = (
  db,
  userId
) => 
  
  new Promise((
    resolve,
    reject
  ) => {

    getVisitBuildings(
      db,
      userId)

      .then(result => {

        if (result['kolo-trunk']
          && result['kolo-trunk']['state'] === 1) {

          updateKoloTrunkVisits(
            db,
            userId,
            result['kolo-trunk']['index']
          )

            .then(result =>
              
              resolve(result))
            
            .catch(err =>
              
              reject(err))
        }

        resolve()
      })
    
      .catch(err =>
        
        reject(err))
  })