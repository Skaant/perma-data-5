module.exports = (
  db,
  userId,
  koloTrunkIndex
) =>

  new Promise((resolve, reject) => {

    db
      .collection('user_buildings')
      .updateOne(
        {
          user: userId
        },
        {
          $inc: {
            [ `list.${ koloTrunkIndex }.visits` ]: 1
          }
        }
      )

      .then(result =>
        
        resolve(result))
      
      .catch(err => 
        
        reject(err))
  })