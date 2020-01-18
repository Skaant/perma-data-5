const { PATTERN_TYPE_SERVER } = require('../../../../_patterns/_pattern/_enums/patternType/patternType.enum')
const {
  PATTERN_RELATION_COMPOSITION_SPECIALIZATION_SOURCE,
  PATTERN_RELATION_COMPOSITION_TARGET
} = require('../../../../_patterns/_pattern/_enums/patternRelation/patternRelation.enum')

module.exports = {
  type: PATTERN_TYPE_SERVER,
  id: '_chain',
  name: 'handler chained process',
  description: {
    summary: 'Describes a chain of async steps (chain links) in : `controller`, `dbcall`.',
    occurence: 'In an `.handler` file',
    problem: 'Standardizes the server lifecycle, after the middlewares, from the handler, up to the response send.chain'
  },
  connections: {
    '_handler': {
      relation: PATTERN_RELATION_COMPOSITION_TARGET,
      number: '1'
    },
    '[chainLinks]': {
      relation: PATTERN_RELATION_COMPOSITION_SPECIALIZATION_SOURCE,
      targets: [
        '_controller',
        '_dbcall'
      ],
      count: '*'
    }
  },
  processor: 'chainProcessor',
  instances: {
    path: './server/app',
    key: /.chain.js/
  }
}