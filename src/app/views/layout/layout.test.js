const chai = require('chai')
const pug = require('pug')
const isValidHtml = require('../../../utils/tests/isValidHtml/isValidHtml')

chai.should()
const expect = chai.expect

describe('[view] layout', () => {

  const params = {
    titles: {
      page: 'layout'
    }
  }
  const html = pug
    .renderFile(
      './src/app/views/layout/layout.pug',
      params)

  it('should render an html base document', () =>
    
    isValidHtml(html)
      .should.be.true)

  it('should render with given page title', () =>
    
    expect(html)
      .to.include('<title>PERMA-DATA - '
        + params.titles.page
        + '</title>'))

  it('should render links for : fontawesome, bootstrap & mdbootstrap', () =>
  
    expect(html)
      .to.include('<link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.2/css/all.css">')
      .and
      .to.include('<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.3.1/css/bootstrap.min.css">')
      .and
      .to.include('<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/mdbootstrap/4.8.8/css/mdb.min.css">'))

  it('should render a navbar, of danger color, and a "PERMA-DATA" navbar brand link', () =>
    
    expect(html)
      .to.include('<nav class="navbar navbar-dark danger-color mb-4">')
      .and
      .to.include('<a class="navbar-brand text-white" href="/">PERMA-DATA </a>'))
})