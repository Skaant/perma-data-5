const getSearchBuildings = require('./getSearchBuildings/getSearchBuildings')

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

      .then(result =>

        resolve(result))
    
      .catch(err =>
        
        reject(err))
  })