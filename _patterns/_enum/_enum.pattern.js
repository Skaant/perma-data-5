const { PATTERN_TYPE_GLOBAL } = require('../_pattern/_enums/patternType/patternType.enum')

module.exports = {
  type: PATTERN_TYPE_GLOBAL,
  id: '_enum',
  name: 'enumeration',
  description: {
    summary: 'Define a set of shared values.',
    occurence: 'two or more modules will have to communicate on the same values.',
    problem: 'the values must be from the same referencial.',
    solution: 'define a module exposing a set of values.',
    implementation: 'the shared values module must be located in a dedicated `_enums` folder.'
      + '\n\nFolder should be at the top of the consumers\' common folder tree.'
  },
  connections: {},
  processor: false,
  instances: {
    path: '.',
    key: /.enum.js/
  }
}