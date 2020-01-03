const { PATTERN_TYPE_SERVER } = require('../../../../_patterns/_pattern/_enums/patternType/patternType.enum')

module.exports = {
  type: PATTERN_TYPE_SERVER,
  id: '_aggregation',
  name: 'mongo aggregation query',
  description: {
    summary: [
      'Describes a mongo aggregation query as a composition of a mongo aggregation stages pipeline.',
      'Describes a facet-specific mongo aggregation query as a multiple paralleled mongo aggregation stages pipelines.'
    ]
  },
  connections: {
    'mongo': {
      description: '_aggregation is consuming _mongo.'
    },
    'query': {
      type: 'component',
      number: '0..1'
    }
  },
  processor: '_aggragater',
  instances: {
    path: './server/app',
    key: /.aggregation.js/
  }
}