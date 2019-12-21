module.exports =
  (
    db,
    _id
  ) =>
  
    new Promise((resolve, reject) =>

      db
        .collection('user_buildings')
        .findOne({ user: _id })
        
        .then(({ buildings }) => {

          resolve(buildings)
        })

        .catch(error =>
          
          reject(error)))