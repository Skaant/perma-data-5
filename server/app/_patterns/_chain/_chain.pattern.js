const { PATTERN_TYPE_SERVER } = require('../../../../_patterns/_pattern/_enums/patternType/patternType.enum')

module.exports = {
  type: PATTERN_TYPE_SERVER,
  id: '_chain',
  name: 'handler chained process',
  description: [
    'Describes a chain of async steps in : control, query, transform.'
  ],
  connections: {
    'handler': {
      description: '_chain is the _handler body.'
    },
    'control': {
      relation: 'composer',
      number: '*'
    },
    'query': {
      relation: 'composer',
      number: '*'
    },
    'transform': {
      relation: 'composer',
      number: '*'
    }
  },
  processor: '_aggragater',
  instances: {
    path: './server/app',
    key: /.aggregation.js/
  }
}