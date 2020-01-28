const { PATTERN_TYPE_GLOBAL } = require('../_pattern/_enums/patternType/patternType.enum')

module.exports = {
  type: PATTERN_TYPE_GLOBAL,
  id: '_utils',
  name: 'utilities folder',
  description: {
    summary: 'Define a shared logic folder.',
    occurence: 'two or more modules use the same logic.',
    problem: 'as the DRY principle states it, we should find a way to share the logic code between this two consumers.'
      + '\n\nThis pattern adresses more the shared logic location, than the abstraction concept itself, **which is more relevant to `_pattern`**.',
    solution: 'put the logic at the top of the consumers common path.',
    implementation: `the logic code folder has to be located in a dedicated \`_utils/\` folder.

Folder should be at the top of the consumers\' common folder tree.

> Folder tree pattern : \`children\`s consume the \`sharedLogic\`s service.

\`\`\`
<parent>
+-- _utils
|   +-- sharedLogic
|   |   +-- sharedLogic.js
+-- <childrenA>
|   +-- <childrenA>.js
+-- <childrenB>
|   +-- <childrenB>.js
\`\`\``
  },
  connections: {},
  processor: false,
  instances: {
    path: '.',
    key: /_utils/
  }
}