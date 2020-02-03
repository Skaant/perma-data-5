import React from 'react'
import BuildingList from './BuildingList/BuildingList'

export default ({
  pseudo,
  buildings
}) => (
  <div className='container'>
    <div className='row justify-content-center px-4'>
      <div className='col-12 col-md-6 text-white'>
        <h1 className='font-weight-light mb-1 font-epic'
            style={ { marginTop: '60px' } }>
          MÉTA-CITÉ</h1>
        <h2 className='lead font-weight-lighter mt-2'
            style={ {
              letterSpacing: '0.8px'
            } }>
          Espace <span className='font-epic'>DATA</span> de { pseudo }</h2>
      </div>
      <BuildingList buildings={ buildings }/>
    </div>
    <div id='city-dialog-modal__anchor'></div>
  </div>
)