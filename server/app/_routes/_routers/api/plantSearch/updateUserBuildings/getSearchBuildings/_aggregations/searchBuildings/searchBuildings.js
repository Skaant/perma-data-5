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
      path: '$list',
      includeArrayIndex: 'index'
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
      newRoot: {
        $mergeObjects: [
          '$list',
          {
            index: '$index'
          }
        ]
      }
    }
  }]