/**
 * Aggregation factory for getSearchBuildings.
 * 
 * @param { string } userId - The current user unique id
 * @returns - The aggregation pipeline
 */
module.exports = userId => 
  [{
    $match: {
      user: userId
    }
  }, {
    $unwind: {
      path: '$list'
    }
  }, {
    $match: {
      "list.id": {
        $in: [
          'kolo-trunk'
        ]
      }
    }
  }, {
    $replaceRoot: {
      newRoot: '$list'
    }
  }]