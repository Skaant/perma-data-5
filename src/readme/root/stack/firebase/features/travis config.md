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
```