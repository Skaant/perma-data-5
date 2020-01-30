import React from 'react'
import _trighbs from '../../_data/trighbs.json'
import ListDisplay from './ListDisplay/ListDisplay.js';

export default building => {

  const {
    id,
    list,
    data
  } = building

  const _trighb = _trighbs[
    data.trighb]
  
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
            trighb={ _trighb }
            title={ (
              <React.Fragment>
                <span className='mr-2 font-weight-bolder'
                    style={ {
                      color: '#'
                        + _trighb.color
                    } }>
                  { _trighb.name }</span>
                { data.name }
              </React.Fragment>
            ) }/>
        </div>
      </div>
    </div>
  )
}