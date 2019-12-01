import React from 'react'
import buildingComponents from './buildings'

export default ({
  pseudo,
  buildings
}) => (
  <div className='container'>
    <h1 className='font-weight-light mb-1'
        style={ { marginTop: '60px' } }>
      MÉTA-CITÉ</h1>
    <h2 className='lead text-lowercase font-weight-lighter'
        style={ {
          marginBottom: '25px',
          letterSpacing: '0.8px'
        } }>
      Espace DATA de { pseudo }</h2>
    <div className='row justify-content-center px-4'>
      {
        buildings.map(building => (
          React
            .createElement(
              buildingComponents[
                building.key],
              {
                id: building.key,
                ...building
              })))
      }
    </div>
    <div id='city-dialog-modal__anchor'></div>
  </div>
)