# PERMA-DATA
**first release to come:** `0.5.1`

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

The **PERMA-DATA** [manifest](/wiki/Manifest) details objectives and key features. It is here sumed up as a list of principles, but more information can be found on its main wiki page.

### Principles

1. **Gather and abstract plant data :** Extract [**plant data**] from different supports, and then, break it in an atomic and interoperable format.

2. **Shapes plant data for user :** From this raw and numerous atomic [**plant data**] (*principle 1*), build a user-friendly interface to display consistent data views.

3. **Eco-responsible infrastructure :** Development and hosting aims for the lowest energetic and financial costs.

4. **Minimalist features and workflows :** To enforces its low consumption orientation (*principle 3*) and save user time and attention, application remains as simple as possible.

5. **Playing is learning :** As part of shaping data (*principle 6*), a gamification layer has been added to make and the learning more playful and the data crawling more interesting.

6. **A fantastic universe :** The story of the **PERMA-DATA** game (*principle 5*) takes place between a near future and up to the end of universe : an ideal setup for imaginating tomorrow's solutions.

7. **Art for the soul :** Illustrating this very universe (*principle 6*), creativity and aesthetics are also a support for sharing knowledge better.

8. **A philosophical tale :** Universe (*principle 6*) and art (*principle 7*) seres as an image/metaphor of way more abstract concepts.

9. **Research tool :** Sourced and verfied [**plant data**], that you can contribute to enlarge by your work (*principle 11*).

10. **Gardening tool :** Inventory your genetics, manage plants in your garden, get tips and send feedback (*principle 11*).

11. **Community tool :** Gardening (*principle 10*) is also sharing. We are giving a pleasant interface to chat and visualize tasks for your gardener crew.

12. **Collaborative development:** The application is open-source, ready for user and developer interactions.

13. **Implementation of shared patterns :** Patterns are defined not to obfuscate architecture but to define a common language, easing design exchanges and code refactoring.

14. **Continuous improvement :** The application will never stop improving in term of reliability and features.

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
   * [_enum](#_enum)
   * [_pattern](#_pattern)
   * [_utils](#_utils)

* **server**
   * [_aggregation](#_aggregation)
   * [_chains](#_chains)
   * [_middlewares](#_middlewares)
   * [_routes](#_routes)

* **client**
   * [_data](#_data)
#### _aggregation

*mongo aggregation query*

**Type :** `PATTERN_TYPE_SERVER`

Describes a mongo aggregation query as a composition of a mongo aggregation stages pipeline.

Describes a facet-specific mongo aggregation query as a multiple paralleled mongo aggregation stages pipelines.









**Instances :** `./server/app (...) /.aggregation.js/`



#### _chains

*handler chained processes*

**Type :** `PATTERN_TYPE_SERVER`

Describes chains of promises (chain links) of types : `_controllers`, `_dbcalls` and `_switches`.

**Occurence:** In an `.handler` file, to order the process of answering request.

Standardizes the server lifecycle, after the middlewares, from the handler, up to the response `send` method.

**Problem:** Handlers can result in a long suit of instructions, difficult to read and to maintain.

**Solution:** Create an array of standard operations (`_controllers`, `_dbcalls`), meant to be conditionnally (`_switches`) executed to prepare the response's body.

**Implementation:** **Composition of `[_chainLinks`]**.

**Instances :** `./server/app (...) /.chain.js/`

* ./server/app/_routes/_routers/api/_routers/auth/signUp/_chains/_main/signUp.main.chain.js

#### _data

*hard coded data*

**Type :** `PATTERN_TYPE_CLIENT`

Stores static data to be bundled.

**Occurence:** A component, or a logic, start consuming data which must be configurable for the future.

**Problem:** Data and logic should be separed.

**Solution:** Use a `_data` folder and fill `.json` or `.js` files with data to be extracted.

**Implementation:** In the consumer folder (or higher for multiple consumers), create the `_data` folder and some `.json` files to store data. `.js` files should be only used when storing functions.

**Instances :** `./src (...) /_data/`

* ./src/_patterns/_data
* ./src/_dep_data
* ./src/bundles/modules/city/_components/City/_data
* ./src/bundles/modules/city/_components/City/BuildingList/buildings/_data

#### _enum

*enumeration*

**Type :** `PATTERN_TYPE_GLOBAL`

Define a set of shared values.

**Occurence:** two or more modules will have to communicate on the same values.

**Problem:** the values must be from the same referencial.

**Solution:** define a module exposing a set of values.

**Implementation:** the shared values module must be located in a dedicated `_enums` folder.

Folder should be at the top of the consumers' common folder tree.

**Instances :** `. (...) /.enum.js/`

* ./_patterns/_pattern/_enums/patternType/patternType.enum.js
* ./_patterns/_pattern/_enums/patternRelation/patternRelation.enum.js

#### _middlewares

*middlewares folder and files*

**Type :** `PATTERN_TYPE_SERVER`

Describes middleware functions and their unique folder.

**Occurence:** a new middleware has to be developped/integrated.

**Problem 1:** Where to put this new middleware ?

**Problem 2:** How to enforce a common interface for middleware files ?

**Solution 1:** Group all the middlewares used by the server app in the same folder.

**Solution 2:** Define a middleware file format.

**Implementation 1:** 
The `server/app/folder` figures the dedicated folder for all middlewares.

**Test :** the `.middleware` files location.

> `_middlewares` folder tree pattern

```
_middlewares
+-- <middleware>
|   +-- <middleware>.middleware.js
```


**Implementation 2:** 
all the `.middleware` module file expose a factory which return a middleware handler.

**Test :** the `.middleware` file format.

> `.middleware` file code pattern

```javascript
module.exports =
  () =>
  
    (req, res, next) => {
  
      // the middleware logic here ...
  
      next()
    }
```


**Instances :** `./server/app (...) /.middleware.js/`

* ./server/app/_middlewares/log/log.middleware.js
* ./server/app/_middlewares/auth/auth.middleware.js

#### _pattern

*code patterns*

**Type :** `PATTERN_TYPE_GLOBAL`

Describes a code pattern which can be reproduced across the project.

Patterns enforce logic, files and tests standardization.

**These are project's keystones.**

**Occurence 1:** 
Whenever a logic is shared across the code, we have two choices :
* `_utils` exposes a single function called from different sub-folders,
* `_pattern`, while more strict in syntax, exposes a whole framework to manage :
      * **iterations,** the basic of a pattern is the repetition of the same logic,
      * **processor,** is what digest iteration and can be either a module or simply a way for code to call it,
      * **generality,** extending `_utils`, `_pattern` allow its iterations to hold their own logic,
which means that they can be activated is certain conditions,
      * **folder organization,**
      * **tests**, for iterations and processor.

**Problem:** 
The same way `_utils` does it, `_pattern` implements the DRY principle.

At some point a logic is repeted but it also requires a higher generality for its iterations to be specialized.

**Solution 1:** A standard `*.pattern.js` file is specified at the top root of folders shared tree which describes the logic for humans and digesters (documentor and tests).



**Instances :** `. (...) /.pattern.js/`

* ./_patterns/_utils/_utils.pattern.js
* ./_patterns/_pattern/_pattern.pattern.js
* ./_patterns/_enum/_enum.pattern.js
* ./src/_patterns/_data/_data.pattern.js
* ./server/app/_patterns/_routes/_routes.pattern.js
* ./server/app/_patterns/_middlewares/_middlewares.pattern.js
* ./server/app/_patterns/_chains/_chains.pattern.js
* ./server/app/_patterns/_aggregation/_aggregation.pattern.js

#### _routes

*server routes tree*

**Type :** `PATTERN_TYPE_SERVER`

Describes a recursive route and router files tree.

**Occurence:** a new route has to be developped.

**Problem 1:** 1. Where to put this new route to keep a file tree as close as the route tree ?

**Problem 2:** 2. How to enforce a common interface for route (and router) files ?

**Solution 1:** 1. Define routes tree as stated :

* Folders and [**router**] files as path nodes,
* Route files as [**route**] endpoints,
* The root [**router**] is `_routes`.


**Solution 2:** 2. Define [**router**] and [**route**] file format.

**Solution 3:** 
![_routes pattern diagram](https://raw.githubusercontent.com/Skaant/perma-data-5/master/doc/images/_routes.pattern.jpg)

**Implementation 1:** 
contains all server's routes, ordered through :

* Multiple [**handler**]s at the `<router>/` folder root,
* Multiple [**router**]s in an optional `_routers/` folder, also at the `<router>/` folder root,
* A `.router` file to bind handlers and routers, down to this recursive structure.

**Tests :**
* `_routes/` location,
* `<handler>/` 1..1 `<handler>.handler.js` composition,
* `<router>/` :
  * 1..1 `<router>.router.js`,
  * 0..* `<handler>/`,
  * 0..1 `_routers/` 1..* `<router>/` composition

> `_routes/` folder tree pattern

```
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
```


**Implementation 2:** 
a `.router` file exposes an `express.Router()` which :

* `router.use(path, <router>)`, to bind sub-routers to path,
* `router.<method>(path, <handler>)` to bind handlers to method and path.

**Test :** the `.router` file format.

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


**Implementation 3:** 
a `.handler` file exposes a handler signature and return the `express.res` (can be encapsulated in a `Promise`).

**Test :** the `.handler` file format.

> `.handler` file code pattern

```javascript
module.exports =
  (req, res) => {
    
    // the handler logic here ...
  
    return res
      .send()
    // or other method
  }
```


**Instances :** `./server/app (...) /.handler.js/`

* ./server/app/_routes/_routers/api/_routers/auth/signUp/signUp.handler.js
* ./server/app/_routes/_routers/api/_routers/auth/signIn/signIn.handler.js
* ./server/app/_routes/_routers/api/_routers/auth/recoverPassword/recoverPassword.handler.js
* ./server/app/_routes/_routers/api/_routers/auth/checkToken/checkToken.handler.js
* ./server/app/_routes/_routers/api/plantSearch/plantSearch.handler.js
* ./server/app/_routes/_routers/api/actions/actions.handler.js
* ./server/app/_routes/plantId/plantId.handler.js
* ./server/app/_routes/home/home.handler.js

#### _utils

*utilities folder*

**Type :** `PATTERN_TYPE_GLOBAL`

Define a shared logic folder.

**Occurence:** two or more modules use the same logic.

**Problem:** as the DRY principle states it, we should find a way to share the logic code between this two consumers.

This pattern adresses more the shared logic location, than the abstraction concept itself, **which is more relevant to `_pattern`**.

**Solution:** put the logic at the top of the consumers common path.

**Implementation:** the logic code folder has to be located in a dedicated `_utils/` folder.

Folder should be at the top of the consumers' common folder tree.

> Folder tree pattern : `children`s consume the `sharedLogic`s service.

```
<parent>
+-- _utils
|   +-- sharedLogic
|   |   +-- sharedLogic.js
+-- <childrenA>
|   +-- <childrenA>.js
+-- <childrenB>
|   +-- <childrenB>.js
```

**Instances :** `. (...) /_utils/`

* ./_utils
* ./_patterns/_utils
* ./src/bundles/modules/_utils
* ./src/bundles/modules/search/_components/_utils
* ./src/bundles/modules/main/_reducer/notifications/_utils
* ./server/app/_utils
* ./server/app/_routes/_routers/api/_utils
* ./server/app/_routes/_routers/api/_routers/auth/_utils


### API

All API routes are prefixed with `/api/`.

#### `/auth/{ mode }`

Where `mode = { 'sign-in', 'sign-up', 'recover-password' }`.

##### Returns

Un objet de type `user`.

### Objects

#### `user`

```json
{
  "pseudo": "<string>",
  "buildings": "<array of [building]>"
}
```

#### `building`

#### `dialogs`

#### `dialog:quest`

#### `dialog:story`

### Glossary

* pattern
  * instances
* plant data
