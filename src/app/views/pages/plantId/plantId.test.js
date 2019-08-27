const chai = require('chai')
const pug = require('pug')

chai.should()
const expect = chai.expect

describe('[view] plant/:id', () => {

  const params = {
    titles: {
      page: 'Tournesol',
      data: 'Données',
      sources: 'Sources'
    },
    plant: {
      id: 'helianthus annuus',
      data: {},
      sources: {}
    }
  }
  const html = pug
    .renderFile(
      './src/app/views/pages/plantId/plantId.pug',
      params)

  it('should render with titles for plant name & id', () =>
    
    expect(html)
      .to.include('<h1 class="pt-4">'
        + params.titles.page + '</h1>')
      .and
      .to.include('<h3 class="font-weight-lighter mb-4">'
        + params.plant.id + '</h3>'))

  it('should render with titles for data & sources', () =>
  
    expect(html)
      .to.include('<h2>'
        + params.titles.data + '</h2>')
      .and
      .to.include('<h2 class="mb-4">'
        + params.titles.sources + '</h2>'))

  it('should render with data & sources content', () =>
  
    expect(html)
      .to.include('<div class="container" id="data-block">')
      .and
      .to.include('<div class="container" id="sources-block">'))
})