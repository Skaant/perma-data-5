/**
 * Aggregation factory for getPlantId.
 * 
 * @param { string } - Virtual plant aggregator id
 * @returns - The aggregation pipeline.
 */
module.exports = plantId => 
  [{
    $match: {
      plants: {
        $in: [ 
          plantId
        ]
      }
    }
  }, {
    $facet: {
      data: [ {
        $project: {
          tags: 1,
          value: 1,
          plants: 1,
          sources: 1
        }
      } ],
      sources: [ {
        $project: {
          source: '$sources'
        }
      }, {
        $unwind: '$source'
      }, {
        $group: {
          _id: '$_id',
          source: {
            $first: '$source'
          }
        }
      }, {
        $unwind: '$source'
      }, {
        $lookup: {
          from: 'sources',
          localField: 'source',
          foreignField: '_id',
          as: 'source'
        }
      }, {
        $replaceRoot: {
          newRoot: {
            $arrayElemAt: [
              '$source',
              0
            ]
          }
        }
      }, {
        $lookup: {
          from: 'sources',
          localField: 'parents',
          foreignField: '_id',
          as: 'parents'
        }
      } ]
    }
  }]