module.exports = {
  type: 'server',
  id: 'chain',
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
  instances: '*.aggregation'
}