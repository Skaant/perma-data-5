module.exports = {
  type: 'server',
  id: 'aggregation',
  name: 'mongo aggregation query',
  description: [
    'Describes a mongo aggregation query as a composition of a mongo aggregation stages pipeline.',
    'Describes a facet-specific mongo aggregation query as a multiple paralleled mongo aggregation stages pipelines.'
  ],
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
  instances: '*.aggregation'
}