import React from 'react'
import _trighbs from './_data/trighbs.json'
import _buildings from './_data/buildings'
import _quests from './_data/quests'

export default ({
  pseudo,
  buildings
}) => (
  <div>
    <h1 className='font-weight-light'
        style={ { marginTop: '60px' } }>
      MÉTA-CITÉ</h1>
    <h2 className='lead'
        style={ { marginBottom: '25px' } }>
      Espace DATA de
      <b> { pseudo }</b></h2>
    <div className='row justify-content-center px-4'>
      {
        buildings.map(({
          key
        }) => (
          <div key={ key }
              className='card m-3'
              style={ { 
                width: '300px',
                maxWidth: '90%'
              } }>
            <div className='card-body pt-3'>
              <h4 className='card-title text-uppercase font-weight-light text-left'>
                <span className={ 
                  `px-2 py-1 ${ _trighbs[_buildings[key].trighb].color } mr-1` }>
                  { _buildings[key].trighb }</span>
                { _buildings[key].name }</h4>
            </div>
          </div>
        ))
      }
    </div>
  </div>
)