const pug = require('pug')

module.exports =
  (req, res) =>{
    console.log('hi ho')
    res
      .send(pug
        .renderFile(
          './server/views/pages/home/home.pug',
          {
            user: req.user,
            titles: {
              page: 'Accueil'
            }
          }))}