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
          .collection('users')
          .insertOne(user)
          .then(({ insertedId }) =>
            
            resolve({
              user: {
                _id: insertedId,
                ...user
              },
              ...data
            }))

          .catch(err =>
            
            reject(err))))