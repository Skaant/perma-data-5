import React from 'react'
import BuildingsList from './BuildingsList/BuildingsList'

export default ({
  pseudo,
  buildings
}) => (
  <div className='container-fluid'>
    <div className='row justify-content-center px-4'>
      <div className='col-12 col-md-6 text-white text-center'>
        <h1 className='font-weight-light display-3 my-5'>
          <span className='font-epic'>
            MÉTA-CITÉ</span>&nbsp;
          de&nbsp;
          <span className='font-epic text-uppercase'>
            { pseudo }</span>
        </h1>
      </div>
      <BuildingsList buildings={ buildings }/>
    </div>
  </div>
)