import React from 'react'
import ListDisplay from './ListDisplay/ListDisplay';
import trighbsData from '../../../../_data/trighbs/trighbs.data.js';

export default building => {

  const {
    id,
    list,
    data
  } = building

  const trighb = trighbsData[data.trighb]
  
  return (
    <div style={ { 
        width: '300px',
        maxWidth: '90%'
      } }>
      <img className='card-img-top'
            src={ `public/images/buildings/${ id }.jpg` }/>
      <div className='card m-3'>
        <div className='card-body p-0'>
          <ListDisplay list={ list }
            trighb={ trighb }
            title={ (
              <React.Fragment>
                <span className='mr-2 font-weight-bolder'
                    style={ {
                      color: '#'
                        + trighb.color
                    } }>
                  { trighb.name }</span>
                { data.name }
              </React.Fragment>
            ) }/>
        </div>
      </div>
    </div>
  )
}