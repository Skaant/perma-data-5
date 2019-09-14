import React from 'react'
import domComponents from './doms'
import domsData from '../../../data/doms/doms.json'

export default ({
  name,
  doms
}) => (
  <div className='container animated blurIn slow'
      style={ {
        maxWidth: '650px',
        marginTop: '75px'
      } }>
    <div className='row'
        style={ { marginBottom: '50px' } }>
      <h1 className='col-12'>
        META-CITÉ</h1>
      <h2 className='col-12 lead'>
        { name || 'anonyme' }</h2>
    </div>
    <div className='row'>
      {
        doms
          .map(dom => {
            let provDom = Object.assign(
              {},
              dom,
              domsData[dom.key])

            return (
              <div key={ dom.key }
                  className='card col-12 col-md-6 px-0'>
                <div className='card-body bg-white rounded-lg p-0 pb-3'>
                  <h4 className='card-title font-weight-lighter py-4'>
                    { provDom.name }</h4>
                  { 
                    React
                      .createElement(
                        domComponents[dom.key],
                        provDom
                      )
                  }
                </div>
              </div>
            )
        })
      }
    </div>
  </div>
)