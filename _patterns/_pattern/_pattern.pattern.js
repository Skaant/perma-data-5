const { PATTERN_TYPE_GLOBAL } = require('./_enums/patternType/patternType.enum')

module.exports = {
  type: PATTERN_TYPE_GLOBAL,
  id: '_pattern',
  name: 'code patterns',
  description: {
    summary: [
      'Describes a code pattern which can be reproduced across the project.',
      'Patterns are enforced to standardize logic, files and tests.'
    ]
  },
  connections: {},
  processor: false,
  instances: {
    path: '.',
    key: /.pattern.js/
  }
}