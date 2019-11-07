/**
 * Returns a promise that, given a query,
 *  resolves with fetched db user, if any.
 * 
 * @param { object } query User query
 * 
 * @returns { User } Matching query user database entry
 */
module.exports =
  (db, query) =>
  
    new Promise((resolve, reject) =>
      db
        .collection('users')
        .findOne(query)
        .then(user => 

          resolve(user)
          
          /* Object.assign(
            {},
            user,
            {
              password: sha256.decrypt(
                user.password,
                passwordEncryptSecretKey
              )
            }) */ )
        .catch(err =>{
          console.log(err)
          reject(err)}))