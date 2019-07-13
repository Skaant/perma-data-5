# perma-data-5
**PERMA-DATA** is a **plant database**, a **collaborative tool**, a **game** and a **rich creative universe** !

Project aims balance between completeness and minimalism, between efficiency and economy.

## Table of contents
* [**PERMA-DATA** manifest](#perma-data-manifest)
* [Quick start](#quick-start)
* [History](#history)
* [Developers : stack and features](#developers--stack-and-features)

# Quick start

Note, that most of command mentionned here are also typed in `./travis.yml`.

## Installation

* In `./` root directory, run a first `npm install`
* In `./src/functions`, run a second `npm install` to install *Firebase* dependencies

  * You can run `(cd ./src/functions/ && npm install)` from root
* In order to use the *Firebase* CLI, run a global `npm install -g firebase-tools`

## Local server

Run *Firebase* server locally :
* Log in using `firebase login` 
* Then, run `firebase serve`

## Other scripts

* `npm run serve` is a shortcut for `(cd ./src && firebase serve)`
* `npm run goreadme` will try to build the `./README.md` file from the `./src/readme/root` folder tree

# **PERMA-DATA** manifest
Since the v5, **PERMA-DATA** shows off its conceptual roadmap, principles, guidelines and ethics.

Advices and improvements are more than welcomed !

Like the whole rest of this project, you can interact with the manifest source code in `./src/readme/root/manifest`.

## Roadmap features

* An **amendment tool** integrated in the **PERMA-DATA** application

## Manifest content

### 1. **Plant data**
* **PERMA-DATA** is first about **gathering & displaying** *plant data* from different *sources*.
* *Sources* could be :

   * Books,
   * Videos,
   * Scholarly Literature,
   * Interviews,
   * Community feedback, etc.
* *Data* can be about :
   * Gardening,
   * Transforming,
   * Conservation,
   * History,
   * Therapeutic uses, etc.
* **Synthesis, ergonomics & personalization are** PERMA-DATA **keystones concepts**.
* Users should be able to find relevant data for a minimal time and infrastructure cost ...

### 2. **Energy savings**

* **Lowering all application costs and consumption**
* Reduction of bandwidth usage (client & server), API calls, CPU-milliseconds (simpler logical operations).
* Reduction of development time, code complexity, technical debt (standards, technology intelligence, documentation, refactorables).
* Reduction of provider's features (cf. [stack](#developers--stack-and-features)) *financial cost* (progressive implementation).
* **Minimalist features and workflow**.
* Reduction of users' time spent and interaction needed to fulfill tasks on the application (automation).
* Reduction of time required to acquire skills and vision for both users and developers.

### 3. **Creative setting**

* **PERMA-DATA** isn't only about efficiency, shapes does matter too. 
* **Creativity, curiosity and diversity in content and styles are encouraged**.
* **PERMA-DATA** stages a *deep optimistic science-fiction* artwork, with a dense living universe
* *Deep* stands for long-term projection (from a close future **to the end of universe**)
* *Deep* also stands for conceptual investigation (absolute, abstraction, infinity, oneness-wholeness)
* *Optimistic* stands for strong positive values like : symbiosis (integration, bio-mimetics), benevolence, collective consciousness
* *Science-fiction* stands for imagination, innovation, anticipation

## 4. **Educational game**

* **PERMA-DATA** implements *gamification* concepts in order to share some precious pieces of knowledge.
* Game is part of and gate to the artwork.
* **Gamification tends to improve engagement and passive learning**.
* Game mechanics and stories illustrate *patterns*.
* *Patterns* describe logical operations workflow.

## 6. **Share feedback**

* **feedback on plants and gardens**
* add your own data to improve reliability and precision with geographical, climatic and growth contexts
* improve sourcing and format
* simply share your thoughts on data, or globally on plants

## 6. **Collaborative development**

* project code is **open-source**
* code is heavily documented with tests, wiki and README
* creators/developers could add their content features and see their work on live application

## 7. **Improve universe**
* exchange about the creative strategy & universe content
* submit **your ideas & art** for alternate *formulation trees*
* as every individual has its own sensibility, *formulation trees* are here to help each one to find what's the most understandable, meaningful & suiting content for itself
* discuss game mechanics, collaborate to theory-crafting, balancing & **playfulness**

# History

## Versions history

### 1. **PERMA-DATA** is then only a one-dimension mind map browser

* it's basically a super simple Wikipedia
* features a single page **React** application
* displays key-identified *concept* page
* *concepts* describe (collaborative) data in strongly-typed categories

  * keywords
  * relationships (to others concepts)
  * context
  * inputs
  * outputs
  * functions
* [FR] [permadata, l'application (open source) qui va enterrer wikipédia](https://www.youtube.com/watch?v=JhJ8msf3gII)
  * *permadata, the (open source) application which will burrow wikipedia*
  * exposes data and page addition, routing and browsing features

2. basic **plant search** and **extract-oriented data** display

* features a single page [create-react-app] application
* *pro-tip: search for* "rosmarinus"
* [firebaseapp link](https://perma-plant-data.firebaseapp.com)
* **concluded on:** need of a better data display and edit, ... and a homepage

3. **plant-data-extract** structure and complete **contributor area**

* **server-side rendered** pages with static data
* **react** modules on dynamic parts and **authenticated areas** (contributor & inventory)
* *contributor area requires manual right edition, ask me in any case*
* *pro-tip: search for* "symphytum"
* [firebaseapp link](https://perma-data-3.firebaseapp.com)
* **concluded on:** need of better data request options & a more playful contribution experience

4. **storytelling**, **gamification** and **features planning**

* independant **mongo database**
* **react modules** rendered on diverse page anchors
* "window **store**" and **application lifecycle**
* integrated **creative content** and **level design** elements
* *create an account simply by clicking* "s'authentifier" *and then* "s'enregistrer"
* [FR] [firebaseapp link](https://perma-data-4.firebaseapp.com/)
  * EN localization won't be available until v5 or later
* **concluded on:** need a **more modular structure**, a better **delivery workflow** and a more **content-oriented UX strategy**

## Releases history

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

## API references

# Glossary

#### *Firebase Functions* **app**
* *Functions* entry point
* Two main apps in PERMA-DATA : **content** (pages) and **api**
* Apps are provided to *Functions* index (`./src/functions/index.js`)
* Apps are handlers with `(req, res) => res.send()` shape