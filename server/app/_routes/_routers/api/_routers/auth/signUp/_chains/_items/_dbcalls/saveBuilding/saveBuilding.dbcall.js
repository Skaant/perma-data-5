const mongo = require('../../../../../../../../../../../mongo/mongo')

module.exports = ({
  user,
  ...data
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

            resolve({
              user,
              ...data,
              buildings
            }))

          .catch(err =>

            reject(err))))