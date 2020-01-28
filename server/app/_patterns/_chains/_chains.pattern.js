const { PATTERN_TYPE_SERVER } = require('../../../../_patterns/_pattern/_enums/patternType/patternType.enum')
const {
  PATTERN_RELATION_COMPOSITION_SPECIALIZATION_SOURCE,
  PATTERN_RELATION_COMPOSITION_TARGET
} = require('../../../../_patterns/_pattern/_enums/patternRelation/patternRelation.enum')

module.exports = {
  type: PATTERN_TYPE_SERVER,
  id: '_chains',
  name: 'handler chained processes',
  description: {
    summary: 'Describes chains of promises (chain links) of types : `_controllers`, `_dbcalls` and `_switches`.',
    occurence:
`In an \`.handler\` file, to order the process of answering request.

Standardizes the server lifecycle, after the middlewares, from the handler, up to the response \`send\` method.`,
    problem: 'Handlers can result in a long suit of instructions, difficult to read and to maintain.',
    solution: 'Create an array of standard operations (`_controllers`, `_dbcalls`), meant to be conditionnally (\`_switches\`) executed to prepare the response\'s body.',
    implementation: `**Composition of \`[_chainLinks\`]**.`
  },
  connections: {
    '_handler': {
      relation: PATTERN_RELATION_COMPOSITION_TARGET,
      number: '1'
    },
    /**
     * `_chainLinks` is the abstract pattern describing the directory where
     *  standard operations (*listed in the `.targets` prop*) are stored by type.
     */
    '[_chainLinks]': {
      relation: PATTERN_RELATION_COMPOSITION_SPECIALIZATION_SOURCE,
      targets: [
        '_controllers',
        '_dbcalls',
        '_switches'
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