import React from 'react'
import buildingComponents from './buildings'
import buildingsData from '../../../data/buildings/buildings.json'

export default
  () => {
  
    const { buildings } = window.__STATE__.data

    return (
      <div className='container animated blurIn slow'
          style={ {
            maxWidth: 'calc(100vh - 50px)',
            marginTop: '60px'
          } }>
        <div className='row'
            style={ { marginBottom: '50px' } }>
          <h1 className='col-12 mb-1'>
            MÉTA-CITÉ</h1>
          <h2 className='col-12 lead'
              title="Cette colonie n'a pas encore de nom.&#013;Quand elle grandira un peu plus et qu'elle entrera en contact avec d'autres MÉTA-CITÉ, il faudra lui en choisir un."
              style={ { cursor: 'pointer' } }>
            anonyme</h2>
        </div>
        <div className='row justify-content-center'>
          {
            buildings
              .map(_building => {
                const building = Object.assign(
                  {},
                  _building,
                  buildingsData[_building.id])

                return (
                  React
                    .createElement(
                      buildingComponents[building.id],
                      building
                    )
                )
            })
          }
        </div>
      </div>
    )
  }