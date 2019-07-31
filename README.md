# perma-data-5
**PERMA-DATA** is a **plant database**, a **collaborative tool**, a **game** and a **rich creative universe** !

Project aims balance between completeness and minimalism, between efficiency and economy.

## Table of contents
* [**PERMA-DATA** manifest](#perma-data-manifest)
* [Quick start](#quick-start)
* [History](#history)
* [Developers : stack and features](#developers--stack-and-features)

## Quick start
*Note that most of command mentionned here are also written in `./travis.yml` for the CI/CD process workflow.*

### Installation
* In `./` root directory, run a first `npm install`
* In `./src/functions`, run a second `npm install` to install *Firebase* dependencies

  * You can run `(cd ./src/functions/ && npm install)` from root
* In order to use the *Firebase* CLI, run a global `npm install -g firebase-tools`

### Local server
* Log in using `firebase login` 
* Then, start the server with `npm start`

### Other scripts
* `npm test` runs the complete Mocha/Chaï test suite

## Manifest
**PERMA-DATA** materializes strong ideas and values. Here are some of the most important ones.

### #1 Gather, formalize, store, synthetize and display plant data
**PERMA-DATA** is first about **gathering** *plant data* from different *sources*, and **displaying** it in a ergonomic way.

*Plant data* can be about culture, production, functions and uses, transformation, conservation, multiplication, history, and a whole lot of different concerns.

Both (the tremendous amount of *data* extracted from sources like books, videos, users' feedback, etc) and (the need for an user to find efficiently and economicaly relevant data) **force us to focus on data atomization and agregation**.

### #2 **Save energy, save time : optimize**
**PERMA-DATA** aims for optimization.

Physicaly and financialy, there is a lot of costs that should be kept as small as possible :
* Reduction of bandwidth usage (client & server), API calls, CPU-milliseconds (simpler logical operations).
* Reduction of development time, code complexity, technical debt (standards, technology intelligence, documentation, refactorables).
* Reduction of provider's features *financial cost* (progressive implementation).
* Reduction of inherent energy consumption sources leak ()

Even for humans, there is time and attention to save with **minimalist features and workflows** :
* Reduction of users' time spent and interaction needed to fulfill tasks on the application (automation).
* Reduction of time required to acquire skills and vision for both users and developers.

Automation and continuous improvment.

### #3 **Creative setting : art beyond technics**
**PERMA-DATA** isn't about efficiency only, shapes does matter too. 

**PERMA-DATA** stages a *deep optimistic science-fiction* artwork, with a dense living universe, where :
* *deep* stands for long-term projection (from a close future **to the end of universe**).
* *deep* also stands for conceptual investigation (absolute, abstraction, infinity, oneness-wholeness).
* *optimistic* stands for strong positive values like : symbiosis (integration, bio-mimetics), benevolence, collective consciousness.
* *science-fiction* stands for imagination, innovation, anticipation.

**Creativity, curiosity and diversity in content and styles are encouraged**.

### #4 **Playing is learning, learning is living**
**PERMA-DATA** implements *gamification* concepts in order to share some precious pieces of knowledge, while making it playful and delightful.

Game is part and gate to the artwork.

**Gamification tends to improve engagement and passive learning**.
* Game content shows practical knowledge and helps memorization.
* Game mechanics illustrate *patterns*.

### #5. Tooling and sharing feedback
**Feedback on plants**
* Add your own data to improve reliability and precision with geographical, climatic and growth contexts
* Improve sourcing and format
* Simply share your thoughts on data, or globally on plants.

**Feedback on gardens and lists**
* Share seeds lists from your inventory and plants lists from your gardens.
* Participate to the community gardens to-do list.

### #6 Collaborative development
**PERMA-DATA** is fully **open-source**.

It exposes a developer-oriented API. Code is heavily documented with tests, wiki and README.
Creators, designers and developers can add their content features and see their work on the live application.

### #7 Improve universe
Exchange about the creative strategy & universe content.
* Submit **your ideas & art** for alternate *formulation trees*.
* As every individual has its own sensibility, *formulation trees* are here to help each one to find what's the most understandable, meaningful & suiting content for itself.

Discuss game mechanics, collaborate to theory-crafting, balancing & **playfulness**.

## Versions history

### v1. **PERMA-DATA** is then only a one-dimension mind map browser

* It's basically a super simple Wikipedia, with a more strongly enforced relation-based navigation.
* Features a single page **React** application
* Displays key-identified *concept* page
* *Concepts* describe (collaborative) data in strongly-typed categories :

  * Keywords
  * Relationships (to others concepts)
  * Context
  * Inputs
  * Outputs
  * Functions
* [FR] [permadata, l'application (open source) qui va enterrer wikipédia](https://www.youtube.com/watch?v=JhJ8msf3gII)
  * *permadata, the (open source) application which will burrow wikipedia*
  * Demonstrate (data and page addition, routing and browsing) features

### v2. Basic **plant search** and **extract-oriented data** display

* Features a single page [create-react-app] application.
* Data is displayed in category containers. Categories in the following :
  * Culture conditions & maintenance,
  * Multiplication,
  * Shape, height, physiology,
  * Functions in garden,
  * Uses and production,
  * *Inserts*, are highlighted sections of a book page,
  * *Categories are strongly based on Bill Mollison & David Holmgren's book* Permaculture 1 *plant catalog appendix data types.*
* In database, data is stored as "sections" (now extracts or atoms).
* [Firebaseapp link](https://perma-plant-data.firebaseapp.com)
* *Pro-tip: search for* "rosmarinus".
* **Concluded on:** need of a better data display and edit, ... and homepage.

### v3. *plant-data-extract* structure and complete **contributor area**

* **Server-side rendered** pages with static data.
* **React** modules on dynamic parts and **authenticated areas** (contributor & inventory).
* *contributor area requires manual right edition, ask me in any case*.
* *Pro-tip: search for* "symphytum".
* [Firebaseapp link](https://perma-data-3.firebaseapp.com).
* **Concluded on:** need of better data request options & a more playful contribution experience.

4. **Storytelling**, **gamification** and **features planning**

* Independant **mongo database**.
* **React modules** rendered on diverse page anchors.
* "Window **store**" and **application lifecycle**.
* Integrated **creative content** and **level design** elements.
* *Create an account simply by clicking* "s'authentifier" *and then* "s'enregistrer".
* [FR] [Firebaseapp link](https://perma-data-4.firebaseapp.com/).
  * EN localization for creative content won't be available until v5 or later.
* **Concluded on:** need a **more modular structure**, a better **delivery workflow** and a more **content-oriented UX strategy**.

# Developers : stack and features
Stack is built upon various technologies, answering different problematics.

The following list briefly describe, with large-scale modules :
* **which third-party is used, providing what features**
* **what solutions are developped specificaly for this project**
* [WIP] complete modules description is to be found in the [project wiki](https://github.com/Skaant/perma-data-5/wiki)

### Table of contents
* [Express server with Firebase Functions](#express-server-with-firebase-function)

  * [Firebase boundaries](#firease-boundaries)
  * [Base features](#base-features)
  * [Functions apps rewrite](#functions-apps-rewrite)
  * [Root lang redirection](#root-lang-redirection)
  * [Middlewares](#middlewares)
* [Deployment and Travis configuration](#travis-configuration-tests-and-deployment)
* [server-side rendered pages](#server-side-rendered-pages)

  * Pug template engine
  * Page list
  * Layout and pages composition tree
* [hybrid jQuery/React client bundles](#hybrid-jqueryreact-client-bundles)
* [MongoDB database](#mongodb-database)
* [API references](#api-references)

## Express server with [Firebase](https://firebase.google.com/docs/web/setup) Functions

### Firebase boundaries
Free usage of Firebase Blaze plan induces limitations that should be taken in mind during development :
* 125 000 **Cloud Functions** call/month
* 40k **Cloud Functions** CPU-second/month (minimum algorithmics server side)
* 10 GB transfered from **Hosting**/month (minimum client bundle weight)
* 100 000 external calls/month (**consumed by calling the Mongo DB instance**)

**Authentication** seems to have no quota on web usage

### Base features
* [Hosting](https://firebase.google.com/docs/hosting/)
* [Authentication](https://firebase.google.com/docs/auth/)
* [**Express**](http://expressjs.com/) server using [**Cloud Functions**](https://firebase.google.com/docs/functions/)
* exposes `firebase serve` and `firebase deploy` command line scripts
* delegated authentication & tokenization

### Functions apps rewrite

See [app glossary definition](#firebase-functions-app-).

In `./src/firebase.json`, both PERMA-DATA's apps (content and api) are linked to url endpoints.

```json
"hosting": {
  "public": "public",
  "rewrites": [
    {
      "source": "/api**",
      "function": "api"
    },
    {
      "source": "**",
      "function": "content"
    }
  ]
}
```

Note priority is as follow :
1. `/public*`
2. `/api**`
3. `**`, also have to handle 404 pages

// APPS BEHAVIOUR NOT DEVELOPED/DOCUMENTED YET

### Root lang redirection

In `./src/firebase.json`, root url (`permadata.net/`) is automatically redirected to `/fr`.

*(*`/fr` *depends on the **content app**.)*

```json
"hosting": {
  "redirects": [
    {
      "source": "/",
      "destination": "/fr",
      "type" : 302
    }
  ]
}
```

### Middlewares

// NOT IMPLEMENTED YET
* `/lang/` params to `req.lang`
* *Authentication* token to user, provisioning `req.user`

## Travis configuration, tests and deployment

### Travis configuration

Endpoints are tested against a `firebase serve` local server.

In order to start the server, the `travis.yaml` include the following instructions :

#### `install` phase

This phase is meant to install firebase dependencies

```yaml
install:
# - npm install
- (cd ./src/functions/ && npm install)
- npm install -g firebase-tools
```

* `(cd ./src/functions/ && npm install)`
  * `()` creates a subshell
  * `cd ./sr/functions` changes directory to the firebase root
  * `npm install` installs the firebase functions dependencies
* `npm install -g firebase-tools` installs globally the firebase CLI

#### `before_script` phase

This phase is meant to serve functions

```yaml
before_script:
- (cd ./src && firebase serve --token $FIREBASE_TOKEN --project perma-data-5 &)
- sleep 10
```

* `(cd ./src && firebase serve --token $FIREBASE_TOKEN --project perma-data-5 &)`
  * `firebase serve` emulates functions as a localhost server
  * `--token $FIREBASE_TOKEN` provides firebase account encrypted (using `travis encrypt`) token (*)
  * `--project perma-data-5` provides target project identifier
  * `&` runs command in background, allowing next commands to be launched
* `sleep 10` lets `firebase serve` 10 seconds to start before runing tests

(*) `$FIREBASE_TOKEN` is declared in `env: global` with the `secure keyword`

## server-side rendered pages
* uses [**Pug**](http://pugjs.org/) as the templating engine
* light-weighted first load & search engine-optimized

## hybrid [jQuery](https://jquery.com)/[React](https://reactjs.org/) client bundle
* [**Bootstrap**](https://getbootstrap.com/) is used to build & animate UI
* **jQuery** provides DOM targeting & update methods

   * *plus, it's required by some Bootstrap components*
* **React** provides isolated scope components, with state management & automated re-render

### app root store, observers & lifecycle
* single app root **store + observers** (*inspired from the Redux implementation*)
* **app lifecycle** API (*inspired from the React stateful component's lifecycle*)
   
   * lifecycle events can be provisioned with *transition methods*
   * *transitions* can be page-specific or common to all page
   * for updates, *transitions*' params can conditionally trigger jQuery functions and React component re-renders
* **automated** authentication & user data **provisioning**

### dynamic page modules
* **React** modules rendered **conditionaly** (*from observers*) **on specific page parts**
* major app modules :
   
   * `<LoginModal/>` and `<UserPanel/>`
   * `<DialogModal/>`
   * `<ZumCite/>`
   * feature **DOMS**

## [MongoDB](https://www.mongodb.com) database
* easily deployed with [**MongoDB Atlas**](https://www.mongodb.com/cloud/atlas) 
* powerful agregation pipeline
* provides the [**MongoDB Compass**](https://www.mongodb.com/products/compass) desktop tool
* scaling options

## Glossary

### *Firebase Functions* **app**
* *Functions* entry point
* Two main apps in PERMA-DATA : **content** (pages) and **api**
* Apps are provided to *Functions* index (`./src/functions/index.js`)
* Apps are handlers with `(req, res) => res.send()` shape