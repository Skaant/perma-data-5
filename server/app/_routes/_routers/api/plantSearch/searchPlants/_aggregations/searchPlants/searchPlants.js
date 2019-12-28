/**
 * Aggregation factory for getPlantSearch.
 * 
 * @param { string } searchValue - The search key / input value
 * @returns - The aggregation pipeline
 */
module.exports =
  searchValue => 
    [{
      $match: {
        $or: [ {
          $and: [ {
            t: 'name,fr'
          }, {
            p: {
              $elemMatch: {
                $regex: searchValue,
                $options: 'i'
              }
            }
          } ]
        }, {
          $and: [ {
            t: 'name,fr'
          }, {
            v: {
              $regex: searchValue,
              $options: 'i'
            }
          } ]
        } ]
      }
    }, {
      $unwind: {
        path: '$p'
      }
    }, {
      $group: {
        _id: '$p',
        v: {
          $push: '$v'
        },
        w: {
          $sum: '$w'
        }
      }
    }, {
      $sort: {
        w: -1
      }
    }, {
      $project: {
        _id: 0,
        id: '$_id',
        names: '$v'
      }
    }]