const chai = require('chai')
const pug = require('pug')

chai.should()
const expect = chai.expect

describe('[view] info', () => {

  const params = {
    titles: {
      page: 'Informations',
      config: 'Run configuration',
      package: 'Stack configuration'
    },
    infos: {
      config: 'config',
      package: 'package'
    }
  }
  const html = pug
    .renderFile(
      './src/app/views/pages/info/info.pug',
      params)

  it('should render with titles for config & package', () =>
    
    expect(html)
      .to.include('<h2>Run configuration</h2>')
      .and
      .to.include('<h2>Stack configuration</h2>'))

  it('should render config & package infos', () =>
  
    expect(html)
      .to.include('<div>config</div>')
      .and
      .to.include('<div>package</div>'))
})