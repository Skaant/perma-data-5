import React from 'react'
import BuildingLayout from '../_layout/BuildingLayout/BuildingLayout';

export default
  data => (
    <BuildingLayout { ...data }>
      <p className='p-4 mb-0 text-right font-weight-light'>
        Visites :
          <b> { data.visits }</b>
      </p>
    </BuildingLayout>
  )