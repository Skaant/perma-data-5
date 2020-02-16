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

### API

All API routes are prefixed with `/api/`.

#### `/auth/{ mode }`

Where `mode = { 'sign-in', 'sign-up', 'recover-password' }`.

##### Returns

Un objet de type `user`.

### Objects

#### `bundle`

#### `module`

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