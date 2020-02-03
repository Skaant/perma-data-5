const { PATTERN_TYPE_CLIENT } = require('../../../_patterns/_pattern/_enums/patternType/patternType.enum')

module.exports = {
  type: PATTERN_TYPE_CLIENT,
  id: '_data',
  name: 'hard coded data',
  description: {
    summary: 'Stores static data to be bundled.',
    occurence: 'A component, or a logic, start consuming data which must be configurable for the future.',
    problem: 'Data and logic should be separed.',
    solution: 'Use a `_data` folder and fill `.json` or `.js` files with data to be extracted.',
    implementation: 'In the consumer folder (or higher for multiple consumers), create the `_data` folder and '
      + 'some `.json` files to store data. `.js` files should be only used when storing functions.'
  },
  connections: {},
  processor: false,
  instances: {
    path: '',
    key: /_data/
  }
}