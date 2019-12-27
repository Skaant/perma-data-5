module.exports = 
  (
    db,
    _id
  ) =>
    new Promise((resolve, reject) => {

      const buildings = [{
        key: 'kolos-seed',
        xp: 0,
        quests: {
          'kolos-seed-intro': {
            opened: false,
            valid: false
          }
        }
      }]

      db
        .collection('user_buildings')
        .insertOne({
          user: _id,
          buildings 
        })
        .then(() =>

          resolve(buildings))
        .catch(err =>

          reject(err))
    })