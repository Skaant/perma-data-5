import React from 'react'
import BuildingList from './BuildingList/BuildingList'

export default ({
  pseudo,
  buildings
}) => (
  <div className='container-fluid'>
    <div className='row justify-content-center px-4'>
      <div className='col-12 col-md-6 text-white text-center'>
        <h1 className='font-weight-light mb-5 display-2 my-3'
            style={ {
              marginTop: '60px'
            } }>
          <span className='font-epic'>
            MÉTA-CITÉ</span>&nbsp;
          de&nbsp;
          <span className='font-epic text-uppercase'>
            { pseudo }</span>
        </h1>
      </div>
      <BuildingList buildings={ buildings }/>
    </div>
    <div id='city-dialog-modal__anchor'></div>
  </div>
)