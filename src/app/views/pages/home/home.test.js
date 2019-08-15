const chai = require('chai')
const pug = require('pug')

chai.should()
const expect = chai.expect

describe('[view] home', () => {

  const html = pug
    .renderFile(
      './src/app/views/pages/home/home.pug',
      {
        titles: {
          page: 'Accueil'
        }
      })

  it('should render with title & subtitle', () =>

    expect(html)
      .to.include('<h1>PERMA-DATA</h1>')
      .and
      .to.include('<h2>La communauté des cultivateurs de savoir</h2>'))
})