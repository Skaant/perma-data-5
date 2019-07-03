## perma-data-5
**PERMA-DATA** is a **plant database**, a **collaborative tool**, a **game** and a **rich creative universe** !

### table of contents
* [**PERMA-DATA** 5 manifest](#perma-data-5-manifest)
* [versions history](#versions-history)
* [stack & development features](#stack--development-features)

# **PERMA-DATA** 5 manifest

## 1. **plant data**

   * PERMA-DATA is initially about **gathering & displaying** *plant data* from different *sources*
   * *sources* can be books, videos, scholarly literature, interviews, community feedback, etc.
   * *data* can be about gardening, transforming, conservation, history, therapeutic uses, etc.
   * due to the overwhelming (for humans) amount of data entries, **synthesis, ergonomics & personalization have to be focused**

## 2. **energy savings**

* **lowering all application costs and consumption**
* reduction of bandwidth usage (client & server), API calls, CPU-milliseconds (simpler logical operations)
* reduction of development time, code complexity, technical debt (standards, technical watch, documentation, refactorables)
* reduction of provider's features (cf. stack) *financial cost* (progressive implementation)
* **minimalist features and workflow**
* reduction of users' time spent & interaction needed to accomplish tasks on the application (automation)

## 3. **creative universe**

* PERMA-DATA stages a *deep optimistic science-fiction* artwork, with a dense living universe
* *deep* stands for long-term projection (from close future **to the end of universe**)
* *deep* also stands for conceptual investigation (absolute, abstraction, infinity, oneness-wholeness)
* *optimistic* stands for strongly positive values like : symbiosis (integration, bio-mimetic), benevolence, collective consciousness
* *science-fiction* stands for imagination, innovation, anticipation

## 4. **educational game**

* PERMA-DATA implements *gamification* concepts in order to share some precious pieces of knowledge
* **gamification tends to improve engagement and passive learning**
* game mechanics and stories illustrate *patterns*
* *patterns* describe logical operations workflow

## 7. **improve universe**
* exchange about the creative strategy & universe content
* submit **your ideas & art** for alternate *formulation trees*
* as every individual has its own sensibility, *formulation trees* are here to help each one to find what's the most understandable, meaningful & suiting content for itself
* discuss game mechanics, collaborate to theory-crafting, balancing & **playfulness**

# versions history
1. *lost in time*
2. basic **plant search** and **extract-oriented data** display

   * features a single page create-react-app
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
4. [ FR only ! ] **storytelling**, **gamification** and **features planning**

   * independant **mongo database**
   * **react modules** rendered on diverse page anchors
   * "window **store**" and **application lifecycle**
   * integrated **creative content** and **level design** elements
   * *create an account simply by clicking* "s'authentifier" *and then* "s'enregistrer"
   * [firebaseapp link](https://perma-data-4.firebaseapp.com/)
   * **concluded on:** need a **more modular structure**, a better **delivery workflow** and a more **content-oriented UX strategy**


## [Firebase](https://firebase.google.com/docs/web/setup) server
Free usage of Firebase Blaze plan induces limitations that should be taken in mind during development :
* 125 000 **Cloud Functions** call/month
* 40k **Cloud Functions** CPU-second/month (minimum algorithmics server side)
* 10 GB transfered from **Hosting**/month (minimum client bundle weight)
* 100 000 external calls/month (**consumed by calling the Mongo DB instance**)

**Authentication** seems to have no quota on web usage

### Features
* [Hosting](https://firebase.google.com/docs/hosting/)
* [Authentication](https://firebase.google.com/docs/auth/)
* [**Express**](http://expressjs.com/) server using [**Cloud Functions**](https://firebase.google.com/docs/functions/)
* exposes `firebase serve` and `firebase deploy` command line scripts
* delegated authentication & tokenization

### middlewares
* `/lang/` params to `req.lang`
* [**Firebase**] authentication `token` to `req.user`

## [MongoDB](https://www.mongodb.com) database
* easily deployed with [**MongoDB Atlas**](https://www.mongodb.com/cloud/atlas) 
* powerful agregation pipeline
* provides the [**MongoDB Compass**](https://www.mongodb.com/products/compass) desktop tool
* scaling options

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