const mongo = require('../../../../../../mongo/mongo')

module.exports =
  user =>
    new Promise((resolve, reject) =>
      mongo()
        .then(({ db }) =>

          db
            .collection('user_buildings')
            .findOne({
              user: user._id
            })
            .then(({ buildings }) => {
              
              const building = buildings
                .find(building =>
                  building.key === 'kolos-seed')
              
              if (!building) {

                reject(new Error(
                  'The "kolos-seed" building isn\'t available.',
                  404
                ))
              }

              const story = building[
                'stories'][
                  'kolos-trighb-presentation']
                    
              if (!story) {

                reject(new Error(
                  'The "kolos-trighb-presentation" story isn\'t available.',
                  404
                ))
              }

              if (story.opened === true) {
                
                resolve({
                  status: 304,
                  message: 'The "kolos-trighb-presentation" story has already been "opened"'
                })
              }

              const updatedBuilding = Object.assign(
                {},
                building,
                {
                  stories: {
                    ['kolos-trighb-presentation']: {
                      opened: true
                    }
                  },
                  quests: {
                    ['kolos-seed-intro']: {
                      opened: true,
                      valid: true
                    }
                  }
                }
              )

              db
                .collection('user_buildings')
                .updateOne({
                  user: user._id
                }, { 
                  $set: {
                    // Building index retrieving,
                    //   in order to target update
                    [`buildings.${ buildings
                      .findIndex(building =>

                        building.key === 'kolos-seed')

                    }`]: updatedBuilding
                  }
                })
                .then(() =>
                
                  resolve({
                    buildings: {
                      ['kolos-seed']: updatedBuilding
                    }
                  }))
                .catch(error =>
                  
                  reject(error))
            })
        .catch(err =>
          reject(err))))