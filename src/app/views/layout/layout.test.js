const chai = require('chai')
const pug = require('pug')
const isValidHtml = require('../../../utils/tests/isValidHtml/isValidHtml')

chai.should()

describe('[view] layout', () => {

  it('should render an html base document', () => {
    const html = 
      pug
        .renderFile('./src/app/views/layout/layout.pug')
    
    isValidHtml(html)
      .should.be.true
  })
})