# PERMA-DATA
**first release :** `0.5.1`

![PERMA-DATA logo: data and grow symbols + heart butterflies](https://raw.githubusercontent.com/Skaant/perma-data-5/master/doc/images/perma-data-logo.jpg)

**PERMA-DATA** is a **plant database**, a **collaborative tool**, a **game** and a **rich creative universe**.

### Table of contents
* [What is PERMA-DATA ?](#what-is-perma-data-)
* [Manifest](#manifest)
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
A gamification layer has been added to make data crawling more interesting, and playful.

#### #6. A fantastic universe

#### #7. A philosophical tale

#### #8. Research tool

#### #9. Gardening tool

#### #10. Community tool

#### #11. Collaborative development

#### #12. Continous improvement
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

Before starting, you'll have to set :
* The MongoDB "secret" file, containing connection username & password.

#### Set up db.secret.json
1. In the `./src/db` folder, create a `db.secret.json` file.
2. Inside of it, add the following entries :

```json
{
  "username": "<userame>",
  "password": "<password>
}
```

3. Go on the MongoDB Atlas instance, in the *Database Access* tab.
4. Choose or create an user, and copy-paste its credentials in the json file.

#### Local server
* Start the server with `npm start`
* For the purpose of specific server development, use the nodemon-mounted application by running `npm run dev-start`

*No server features actually depend on the NODE_ENV variables, while it may change in the future.*

#### Other scripts
* `npm test` runs the Mocha/Chaï **unit testing** suite.
The script excludes all "#e2e"-tagged tests.

### Patterns

#### \_middlewares
`_middlewares` is located in the `server/app` folder.

This pattern only describes the *middleware* nature of its contained folders and files.

#### \_routes
`_routes` is located in the `server/app` folder.

This pattern describes the `server`'s routes-tree architecture.

![\_routes pattern diagram](https://raw.githubusercontent.com/Skaant/perma-data-5/master/doc/images/_routers.pattern.jpg)
