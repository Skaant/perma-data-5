const mongo = require('../../../../mongo/mongo')
const getUserAggregation = require('./_aggregation/getUser.aggregation')

/**
 * Returns a promise that resolves with fetched db user
 * 
 * @param array query - A mongo request selector object
 */
module.exports = token =>

  new Promise((resolve, reject) =>

    mongo()

      .then(({ db }) =>
        db
          .collection('users')
          .aggregate(
            getUserAggregation(token),
            (
              err,
              cursor
            ) => {
    
              if (err) {
    
                reject(res, err)
              }
              
              cursor
                .toArray()

                .then(results =>
    
                  resolve(results[0]))
    
                .catch(err =>
    
                  reject(res, err))
            })))