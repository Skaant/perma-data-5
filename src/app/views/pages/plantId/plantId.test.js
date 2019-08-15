const chai = require('chai')
const pug = require('pug')

chai.should()
const expect = chai.expect

describe('[view] plant/:id', () => {

  const params = {
    titles: {
      page: 'helianthus annuus',
      data: 'data',
      sources: 'sources'
    },
    plant: {
      id: 'helianthus annuus',
      data: 'data',
      sources: 'sources'
    }
  }
  const html = pug
    .renderFile(
      './src/app/views/pages/plantId/plantId.pug',
      params)

  it('should render with titles for plant name & id', () =>
    
    expect(html)
      .to.include('<h1>Nom de la plante</h1>')
      .and
      .to.include('<h2>helianthus annuus</h2>'))

  it('should render with titles for data & sources', () =>
  
    expect(html)
      .to.include('<h3>data</h3>')
      .and
      .to.include('<h3>sources</h3>'))

  it('should render with data & sources content', () =>
  
    expect(html)
      .to.include('<div>data</div>')
      .and
      .to.include('<div>sources</div>'))
})