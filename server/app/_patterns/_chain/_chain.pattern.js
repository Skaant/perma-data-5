const { PATTERN_TYPE_SERVER } = require('../../../../_patterns/_pattern/_enums/patternType/patternType.enum')
const {
  PATTERN_RELATION_COMPOSITION_SOURCE,
  PATTERN_RELATION_COMPOSITION_TARGET
} = require('../../../../_patterns/_pattern/_enums/patternRelation/patternRelation.enum')

module.exports = {
  type: PATTERN_TYPE_SERVER,
  id: '_chain',
  name: 'handler chained process',
  description: {
    summary: 'Describes a chain of async steps in : `control`, `query`, `transform`.',
    occurence: 'in an `.handler` file',
    problem: ''
  },
  connections: {
    '_handler': {
      relation: PATTERN_RELATION_COMPOSITION_TARGET,
      number: '1'
    },
    '_chainLink': {
      relation: PATTERN_RELATION_COMPOSITION_SOURCE,
      count: '*'
    }
  },
  processor: '_aggragater',
  instances: {
    path: './server/app',
    key: /.chain.js/
  }
}