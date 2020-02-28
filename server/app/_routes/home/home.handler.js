const pug = require('pug')

module.exports =
  (req, res) =>
    res
      .send(pug
        .renderFile(
          './server/views/pages/home/home.pug',
          {
            user: req.user,
            page: {
              title: 'Accueil',
              description: 'La communauté des cultivateurs de savoir. Des données sur les plantes, un jeu pour les explorer.'
            }
          }))