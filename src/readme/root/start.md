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