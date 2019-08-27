const pug = require('pug')

module.exports =
  (req, res) =>
    res
      .send(pug
        .renderFile(
          './src/app/views/pages/home/home.pug',
          {
            titles: {
              page: 'Accueil'
            }
          }))