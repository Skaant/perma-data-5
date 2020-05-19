const fs = require('fs')
const pug = require('pug')

fs.writeFileSync(
  './server/app/_routes/home/_files/home-base.html',
  pug
    .renderFile(
      './server/views/pages/home/home.pug',
      {
        auth: false,
        page: {
          title: 'La communauté des cultivateurs de savoir'
        }
      }))

fs.writeFileSync(
  './server/app/_routes/home/_files/home-auth.html',
  pug
    .renderFile(
      './server/views/pages/home/home.pug',
      {
        auth: true,
        page: {
          title: 'La communauté des cultivateurs de savoir'
        }
      }))