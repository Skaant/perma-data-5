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
      .to.include('<h1 class="pt-4 font-weight-bold">')
      .and
      .to.include('<h2 class="pt-1 pb-4">'))
})