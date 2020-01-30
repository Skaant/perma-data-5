const mongo = require('../../../../../../../../../../../mongo/mongo')

module.exports = ({
  user,
  buildings
}) =>

  new Promise(
    (
      resolve,
      reject
    ) =>
    
    mongo()

      .then(({ db }) =>

        db
          .collection('user_buildings')
          .insertOne({
            user: user._id,
            buildings 
          })
          .then(() =>

            resolve())

          .catch(err =>

            reject(err))))