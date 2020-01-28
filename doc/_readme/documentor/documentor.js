const fs = require('fs')
const patternsDocumentor = require('./patterns/patterns.documentor')

patternsDocumentor()
  .then(document => {

    fs
      .readFile(
        __dirname
          + '/../_readme.md',
        {
          encoding: 'utf8'
        },
        (
          err,
          readme
        ) => {

          err && console.error(err)

          fs
            .writeFile(
              'README.md',
              readme
                .replace(
                  '### Patterns',
                  '### Patterns\n'
                    + document
                ),
              err =>

                err
                  ? console.log(err)

                  : console.log(`

README built !`)
            )
        }
      )
  })