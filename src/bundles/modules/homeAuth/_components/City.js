import React from 'react'

export default ({
  buildings
}) => (
  <div>
    <h1 style={ { marginTop: '60px' } }>
      Ville anonyme</h1>
    {
      buildings.map(building => (
        <div key={ building.key }>
          { building.key }
        </div>
      ))
    }
  </div>
)