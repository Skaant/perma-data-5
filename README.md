# perma-data-5
**PERMA-DATA** is a **plant database**, a **collaborative tool**, a **game** and a **rich creative universe** !

Project aims balance between completeness and minimalism, between efficiency and economy.

## Table of contents
* [Quick start](#quick-start)
* [Manifest](#perma-data-manifest)
* [Patterns](#patterns)

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

## Patterns

### _middlewares
`_middlewares` is located in the `server/app` folder.

This pattern only describes the *middleware* nature of its contained folders and files.

### _routes
`_routes` is located in the `server/app` folder.

This pattern describes the `server`'s routes-tree architecture.

`<picture>`
