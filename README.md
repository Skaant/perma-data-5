# perma-data-5
**PERMA-DATA** is a **plant database**, a **collaborative tool**, a **game** and a **rich creative universe** !

Project aims balance between completeness and minimalism, between efficiency and economy.

## Table of contents
* [Quick start](#quick-start)
* [Manifest](#perma-data-manifest)
* [History](#versions-history)
* [Developers : stack and features](#developers--stack-and-features)
* [Glossary](#glossary)

## Quick start

### Installation
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

### Local server
* Start the server with `npm start`
* For the purpose of specific server development, use the nodemon-mounted application by running `npm run dev-start`

*No server features actually depend on the NODE_ENV variables, while it may change in the future.*

### Other scripts
* `npm test` runs the Mocha/Chaï **unit testing** suite.
The script excludes all "#e2e"-tagged tests.

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

### #3 **Playing is learning, learning is living**
**PERMA-DATA** implements *gamification* concepts in order to share some precious pieces of knowledge, while making it playful and delightful.

Game is part and gate to the artwork.

**Gamification tends to improve engagement and passive learning**.
* Game content shows practical knowledge and helps memorization.
* Game mechanics illustrate *patterns*.

### #4 **Creative setting : art beyond technics**
**PERMA-DATA** isn't about efficiency only, shapes does matter too. 

**PERMA-DATA** stages a *deep optimistic science-fiction* artwork, with a dense living universe, where :
* *deep* stands for long-term projection (from a close future **to the end of universe**).
* *deep* also stands for conceptual investigation (absolute, abstraction, infinity, oneness-wholeness).
* *optimistic* stands for strong positive values like : symbiosis (integration, bio-mimetics), benevolence, collective consciousness.
* *science-fiction* stands for imagination, innovation, anticipation.

**Creativity, curiosity and diversity in content and styles are encouraged**.

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

### v4. **Storytelling**, **gamification** and **features planning**

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

# Glossary
