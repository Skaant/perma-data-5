const { PATTERN_TYPE_GLOBAL } = require('./_enums/patternType/patternType.enum')

module.exports = {
  type: PATTERN_TYPE_GLOBAL,
  id: '_pattern',
  name: 'code patterns',
  description: {
    summary: [
      'Describes a code pattern which can be reproduced across the project.',
      'Patterns enforce logic, files and tests standardization.',
      '**These are project\'s keystones.**'
    ],
    occurence: [
      `
Whenever a logic is shared across the code, we have two choices :
* \`_utils\` exposes a single function called from different sub-folders,
* \`_pattern\`, while more strict in syntax, exposes a whole framework to manage :
      * **iterations,** the basic of a pattern is the repetition of the same logic,
      * **processor,** is what digest iteration and can be either a module or simply a way for code to call it,
      * **generality,** extending \`_utils\`, \`_pattern\` allow its iterations to hold their own logic,
which means that they can be activated is certain conditions,
      * **folder organization,**
      * **tests**, for iterations and processor.`
    ],
    problem: `
The same way \`_utils\` does it, \`_pattern\` implements the DRY principle.

At some point a logic is repeted but it also requires a higher generality for its iterations to be specialized.`,

    solution: [
      'A standard `*.pattern.js` file is specified at the top root of folders shared tree which describes the logic for humans and digesters (documentor and tests).'
    ]
  },
  connections: {},
  processor: false,
  instances: {
    path: '.',
    key: /.pattern.js/
  }
}