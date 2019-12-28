const pug = require('pug')

module.exports =
  (req, res) =>
    res
      .send(pug
        .renderFile(
          './server/views/pages/home/home.pug',
          {
            user: req.user,
            titles: {
              page: 'Accueil'
            }
          }))