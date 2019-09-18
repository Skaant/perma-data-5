import React from 'react'
import BuildingLayout from '../_layout/BuildingLayout/BuildingLayout';

export default ({
  id,
  name,
  summary
}) => (
  <BuildingLayout
      id={ id }
      name={ name }
      summary={ summary }>
    <div className='container'>
      <div className='row'>
        <div className='col-12'
            onClick={ () => {
              window.__STATE__
                .modules.questModal
                  .update({
                    title: 'kakou',
                    content: 'oki'
                  })
            }}>
          <h6>Quête</h6>
          <p>Oki oki</p>
        </div>
      </div>
    </div>
  </BuildingLayout>
)