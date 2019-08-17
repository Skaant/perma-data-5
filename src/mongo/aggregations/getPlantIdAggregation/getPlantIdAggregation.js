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
        $sort: {
          w: -1
        }
      }, {
        $group: {
          _id: '$t',
          items: {
            $push: {
              value: '$v',
              source: '$s'
            }
          }
        }
      }, {
        $project: {
          _id: 0,
          k: '$_id',
          v: '$items'
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
      }, {
        $project: {
          _id: 0,
          k: {
            $toString: '$_id'
          },
          v: {
            title: '$title',
            parents: '$parents'
          }
        }
      } ]
    }
  }, {
    $project: {
      data: {
        $arrayToObject: '$data'
      },
      sources: {
        $arrayToObject: '$sources'
      }
    }
  }]