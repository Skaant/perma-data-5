/**
 * Returns a promise that, given an user object,
 *  resolves by making it persists in db.
 * 
 * @param { object } user Provisioned user object
 * 
 * @returns { ObjectId } New entry _id
 */
module.exports = 
  (
    db,
    user
   ) =>

    new Promise((resolve, reject) =>

      db
        .collection('users')
        .insertOne(user)
        .then(({ insertedId }) =>
          
          resolve(insertedId))
        .catch(err =>
          
          reject(err)))