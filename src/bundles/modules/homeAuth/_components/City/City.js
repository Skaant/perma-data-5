import React from 'react'
import BuildingLayout from './buildings/BuildingLayout/BuildingLayout';

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
        buildings.map(building => (
          <BuildingLayout key={ building.key }/>
        ))
      }
    </div>
  </div>
)