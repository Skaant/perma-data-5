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
    <div className='card m-3'
        style={ { 
          width: '300px',
          maxWidth: '90%'
        } }>
      <div className='card-body p-0'>
        <h4 className='card-title text-uppercase font-weight-light text-left mt-4 px-4'>
          <span className={ 
            `px-2 py-1 ${ _trighb.color } mr-2` }>
            { _trighb.name }</span>
          { _building.name }</h4>
        <img className='card-img-top'
            src={ `public/images/buildings/${ id }.jpg` }/>
        <ListDisplay list={ list } />
      </div>
    </div>
  )
}