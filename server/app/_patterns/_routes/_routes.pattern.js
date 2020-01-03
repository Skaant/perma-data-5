const { PATTERN_TYPE_SERVER } = require('../../../../_patterns/_pattern/_enums/patternType/patternType.enum')

module.exports = {
  type: PATTERN_TYPE_SERVER,
  id: '_routes',
  name: 'server routes tree',
  description: {
    summary: 'Describes a recursive route and router files tree.',
    occurence: 'a new route has to be developped.',
    problem: [
      '1. Where to put this new route to keep a file tree as close as the route tree ?',
      '2. How to enforce a common interface for route (and router) files ?'
    ],
    solution: [
      `1. Define routes tree as stated :

* Folders and [**router**] files as path nodes,
* Route files as [**route**] endpoints,
* The root [**router**] is \`_routes\`.
`,
    
      '2. Define [**router**] and [**route**] file format.',
      '\n![\_routes pattern diagram](https://raw.githubusercontent.com/Skaant/perma-data-5/master/doc/images/_routes.pattern.jpg)'
    ],
    implementation: [
      `
contains all server's routes, ordered through :

* Multiple [**handler**]s at the \`<router>/\` folder root,
* Multiple [**router**]s in an optional \`_routers/\` folder, also at the \`<router>/\` folder root,
* A \`.router\` file to bind handlers and routers, down to this recursive structure.

**Tests :**
* \`_routes/\` location,
* \`<handler>/\` 1..1 \`<handler>.handler.js\` composition,
* \`<router>/\` :
  * 1..1 \`<router>.router.js\`,
  * 0..* \`<handler>/\`,
  * 0..1 \`_routers/\` 1..* \`<router>/\` composition

> \`_routes/\` folder tree pattern

\`\`\`
_routes
+-- _routers
|   +-- <router>
|   |   +-- <router>.router.js
|   |   +-- _routers // _routers recursion ...   
|   |   +-- <handlerB>
|   |   |   +-- <handlerB>.handler.js
+-- <handlerA>
|   +-- <handlerA>.handler.js
+-- _routes.router.js
\`\`\`
`,

      `
a \`.router\` file exposes an \`express.Router()\` which :

* \`router.use(path, <router>)\`, to bind sub-routers to path,
* \`router.<method>(path, <handler>)\` to bind handlers to method and path.

**Test :** the \`.router\` file format.

> \`.router\` file code pattern

\`\`\`javascript
const { Router } = require('express')

const router = Router()

router
  .use(
    '<path>',
    require('./_routers/<router>/<router>.router')
  )

router
  .put(
    '/<path>',
    require('./<handler>/<handler>.handler')
  )

module.exports = router
\`\`\`
`,

      `
a \`.handler\` file exposes a handler signature and return the \`express.res\` (can be encapsulated in a \`Promise\`).

**Test :** the \`.handler\` file format.

> \`.handler\` file code pattern

\`\`\`javascript
module.exports =
  (req, res) => {
    
    // the handler logic here ...
  
    return res
      .send()
    // or other method
  }
\`\`\`
`
    ]
  },
  connections: {},
  processor: null,
  instances: {
    path: './server/app',
    key: /.handler.js/
  }
}