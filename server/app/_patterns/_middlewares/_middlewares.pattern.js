const { PATTERN_TYPE_SERVER } = require('../../../../_patterns/_pattern/_enums/patternType/patternType.enum')

module.exports = {
  type: PATTERN_TYPE_SERVER,
  id: '_middlewares',
  name: 'middlewares folder and files',
  description: {
    summary: 'Describes middleware functions and their unique folder.',
    occurence: 'a new middleware has to be developped/integrated.',
    problem: [
      '1. Where to put this new middleware ?',
      '2. How to enforce a common interface for middleware files ?'
    ],
    solution: [
      '1. Group all the middlewares used by the server app in the same folder.',
      '2. Define a middleware file format.'
    ],
    implementation: [
      `
The \`server/app/folder\` figures the dedicated folder for all middlewares.

**Test :** the \`.middleware\` files location.

> \`_middlewares\` folder tree pattern

\`\`\`
_middlewares
+-- <middleware>
|   +-- <middleware>.middleware.js
\`\`\`
`,

      `
all the \`.middleware\` module file expose a factory which return a middleware handler.

**Test :** the \`.middleware\` file format.

> \`.middleware\` file code pattern

\`\`\`javascript
module.exports =
  () =>
  
    (req, res, next) => {
  
      // the middleware logic here ...
  
      next()
    }
\`\`\`
`
    ]
  },
  connections: {},
  processor: null,
  instances: {
    path: './server/app',
    key: /.middleware.js/
  }
}