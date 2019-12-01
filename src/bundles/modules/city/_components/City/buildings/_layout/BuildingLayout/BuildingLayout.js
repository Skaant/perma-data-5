import React from 'react'
import _trighbs from '../../_data/trighbs.json'
import _buildings from '../../_data/buildings'
import ListDisplay from './ListDisplay/ListDisplay.js';

export default building => {

  const {
    id,
    list
  } = building

  const _building = _buildings[id]
  const _trighb = _trighbs[
    _building.trighb]
  
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
                { _building.name }
              </React.Fragment>
            ) }/>
        </div>
      </div>
    </div>
  )
}