# PERMA-DATA
**first release :** `0.5.1`

![PERMA-DATA logo: data and grow symbols + heart butterflies](https://raw.githubusercontent.com/Skaant/perma-data-5/master/doc/images/perma-data-logo.jpg)

**PERMA-DATA** is a **plant database**, a **collaborative tool**, a **game** and a **rich creative universe**.

### Table of contents
* [What is PERMA-DATA ?](#what-is-perma-data-)
  * [Principles](#principles)
* [Development](#development)
  * [Quick start](#quick-start)
  * [Patterns](#patterns)

## What is PERMA-DATA ?

**PERMA-DATA** is being developped to agregate [**plant data**] from various but consistent sources.

Our main concern is to make data available for everybody, while ensuring its quality and maintainability.

**PERMA-DATA** manifest can be found below, sumed up as a list of principles.

### Principles

#### #1. Gather and abstract plant data
Extract [**plant data**] from different supports, and then, break it in an atomic and interoperable format.

#### #2. Shapes plant data for user
From this raw and numerous atomic [**plant data**] (*principle 1*), build a user-friendly interface to display consistent data views.

#### #3. Eco-responsible infrastructure
Development and hosting aims for the lowest energetic and financial costs.

#### #4. Minimalist features and workflows
To enforces its low consumption orientation (*principle 3*) and save user time and attention, application remains as simple as possible.

#### #5. Playing is learning
As part of shaping data (*principle 6*), a gamification layer has been added to make and the learning more playful and the data crawling more interesting.

#### #6. A fantastic universe
The story of the **PERMA-DATA** game (*principle 5*) takes place between a near future and up to the end of universe : an ideal setup for imaginating tomorrow's solutions.

#### #7. Art for the soul
Illustrating this very universe (*principle 6*), creativity and aesthetics are also a support for sharing knowledge better.

#### #8. A philosophical tale
Universe (*principle 6*) and art (*principle 7*) seres as an image/metaphor of way more abstract concepts.

#### #9. Research tool
Sourced and verfied [**plant data**], that you can contribute to enlarge by your work (*principle 11*).

#### #10. Gardening tool
Inventory your genetics, manage plants growing in your garden, get tips and send feedback (*principle 11*).

#### #11. Community tool
Gardening (*principle **) is also sharing. We are giving an pleasant interface to chat and visualize tasks.

#### #12. Collaborative development
The application is open-source, ready for user and developer interactions.

#### #13. Implementation of shared patterns
Patterns are defined not to obfuscate architecture but to define a common language, easing design exchanges and code refactoring.

#### #14. Continuous improvement
The application will never stop improving in term of reliability and features.

## Development
**PERMA-DATA** is built on a composite stack :

* **Server :** `node` + `express`

  * `pugjs` template engine
  * `mongo` database
  
* **Client :** `jquery` + `react` [**bundles**]

  * `redux` state management

The design promotes use of code **patterns** to enforce a scallable architecture. Please refer to [the dedicated section](#patterns) of this document to learn more.

### Quick start

#### Installation
* First of all, install dependencies with `npm install`.
* *You may also need to install* `webpack` *globally*.

**You'll have then to** request @Skaant to obtain mongo credentials to provision the `server/mongo/clientSecret.json` file with `username` and `password` :

```json
{
  "username": "",
  "password": ""
}
```

#### Local server
* Start the server with `npm run dev-start`,
* `npm start` *is reserved for production*.

#### Client bundles
Every client bundle has its own `npm run` command :

```json
{
  "build-home-base": "webpack --config ./webpack.config.js --output ./public/bundles/pages/home/base.js ./src/bundles/entrypoints/pages/home/base/base.js",
  "build-home-auth": "webpack --config ./webpack.config.js --output ./public/bundles/pages/home/auth.js ./src/bundles/entrypoints/pages/home/auth/auth.js",
  "build-plantId-main": "webpack --config ./webpack.config.js --output ./public/bundles/pages/plantId/main.js ./src/bundles/entrypoints/pages/plantId/main.js",
  "build-plantId-auth": "webpack --config ./webpack.config.js --output ./public/bundles/pages/plantId/auth.js ./src/bundles/entrypoints/pages/plantId/auth.js"
}
```

### Patterns

* **global**
  * [\_utils](#_utils)
* **server**
  * [\_middlewares](#_middlewares)
  * [\_routes](#_routes)
* **client**

#### \_utils
`_utils` is a **global** pattern.

**Happens :** when some logic is shared between two or more consumers,

**Behaviour :** the logic folder has to be located in an `_utils/` folder, **in the most specific shared parent folder**.

> The folder tree pattern : `children`s consume the `sharedLogic`'s service.

```
<parent>
+-- \_utils
|   +-- sharedLogic
|   |   +-- sharedLogic.js
+-- <children>
|   +-- <children>.js
```

#### \_middlewares
`_middlewares` is a **server** pattern.

**Happens :** in the `server/app` folder,

**Behaviour 1 :** group all the middlewares used by the server on the same root.

> The folder tree pattern

```
_middlewares
+-- <middleware>
|   +-- <middleware>.middleware.js
```

**Behaviour 2 :** all the `.middleware` module file expose a factory which return a middleware handler.

> The file code pattern

```javascript
// The file
module.exports =
  () =>
  
    (req, res, next) => {
  
      // the middleware logic here ...
  
      next()
    }
```

#### \_root
`_root` is a **server** pattern.

**Happens :** located in the `server/app` folder,

![\_root pattern diagram](https://raw.githubusercontent.com/Skaant/perma-data-5/master/doc/images/_root.pattern.jpg)

**Behaviour 1 :** contains all server's routes, ordered through :

* multiple `handler`(s), at the folder root,
* multiple `router`(s), in an optional `_routers` folder,
* a `.router` file to bind handlers and routers from the root.

```
_root
+-- _routers
|   +-- <router>
|   |   +-- <router>.router.js
+-- <handler>
|   +-- <handler>.handler.js
+-- _root.router.js
```

**Behaviour 2 :** a `.router` file exposes an `express.Router()` which :

* `.use(path, <router>)`, to bind sub-routers to path,
* `.<method>(path, <handler>)` to bind handlers to method and path.

> `.router` file code pattern

```javascript
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
```

**Behaviour 3 :** a `.handler` file exposes a handler signature and return the `express.res` (can be encapsulated in a `Promise`).

> The `handler` file code pattern

```javascript
module.exports =
  (req, res) => {
   
    // the handler logic here ...
 
    res
      .send()
    // or other method
  }
```
