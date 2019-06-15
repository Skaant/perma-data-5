# perma-data-5
**PERMA-DATA** is a **plant database**, a **collaborative tool**, a **game** and a **rich creative universe** !

### table of contents
* [**PERMA-DATA** 5 manifest](#perma-data-5-manifest)
* [versions history](#versions-history)
* [stack & development features](#stack--development-features)

## **PERMA-DATA** 5 manifest
1. **aggregate and synthetize** plant data

   * from various source supports (books, videos, experiences, etc.)
   * to make it "digestible"/pertinent for the application users
2. **aggregate, share, teach, improve** patterns
3. **create, expand and refactor a** *deep optimistic science-fiction* **universe, (where :**

   * *deep*, stands for an infinite horizon of time
   * *optimistic*, stands for positive perspectives, utopic
   * *science-fiction*, stands both for technological speculations and thrilling adventures !)
4. **expose** tools **on** data, community and gardening

   * personalize toolbox and automations
   * **make it a game**
5. offer the most **hackable experience** possible

   * **contribute to data & synthesis** pipelines
   * **discuss and submit proposal on story shape & content**
   * **contribute to features design & development**

## versions history
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

## stack & development features
here are presented the application stack & the solutions used

each of them is first described by its basic features, while the rest is dedicated to implementation

#### table of contents
* [Firebase back-end](#firebase-back-end)
* [MongoDB database](#mongodb-database)
* [server-side rendered pages](#server-side-rendered-pages)
* [hybrid jQuery/React client bundles](#hybrid-jqueryreact-client-bundles)

### [Firebase](https://firebase.google.com/docs/web/setup) back-end

#### base features
* [Hosting](https://firebase.google.com/docs/hosting/)
* [Authentication](https://firebase.google.com/docs/auth/)
* [**Express**](http://expressjs.com/) server using [**Cloud Functions**](https://firebase.google.com/docs/functions/)
* exposes `firebase serve` and `firebase deploy` command line scripts
* delegated authentication & tokenization

### [MongoDB](https://www.mongodb.com) database

#### base features
* easily deployed with [**MongoDB Atlas**](https://www.mongodb.com/cloud/atlas) 
* powerful agregation pipeline
* provides the [**MongoDB Compass**](https://www.mongodb.com/products/compass) desktop tool
* scaling options

### server-side rendered pages

#### base features
* uses [**Pug**](http://pugjs.org/) as the templating engine
* light-weighted first load & search engine-optimized

### hybrid [jQuery](https://jquery.com)/[React](https://reactjs.org/) client bundles

#### base features
* [**Bootstrap**] is used to build & animate UI
* **jQuery** provides DOM targeting & update methods
   * *plus, is required by some Bootstrap components*
* **React** provides isolated scope components, with state management & automated re-render

#### app root store, observers & lifecycle
* single app root **store + observers**
* **app lifecycle** API

#### page components
* **React** modules rendered **conditionaly on specific page parts**