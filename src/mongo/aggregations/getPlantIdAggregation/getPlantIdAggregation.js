/**
 * Aggregation factory for getPlantId.
 * 
 * @param { string } - Virtual plant aggregator id
 * @returns - The aggregation pipeline.
 */
module.exports = plantId => 
  [{
    $match: {
      p: {
        $in: [ 
          plantId
        ]
      }
    }
  }, {
    $facet: {
      data: [ {
        $project: {
          tags: '$t',
          value: '$v',
          plants: '$p',
          sources: '$s'
        }
      } ],
      sources: [ {
        $project: {
          source: '$s'
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