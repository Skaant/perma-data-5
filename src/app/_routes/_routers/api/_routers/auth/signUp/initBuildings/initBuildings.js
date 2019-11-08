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
          'kolo_seed_intro': {
            opened: false
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