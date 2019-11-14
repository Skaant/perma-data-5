import React from 'react'
import _trighbs from '../../_data/trighbs.json'
import _buildings from '../../_data/buildings'
import _quests from '../../_data/quests'

export default building => {

  const {
    id
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
      <div className='card-body pt-3'>
        <h4 className='card-title text-uppercase font-weight-light text-left mt-2'>
          <span className={ 
            `px-2 py-1 ${ _trighb.color } mr-2` }>
            { _trighb.name }</span>
          { _building.name }</h4>
      </div>
    </div>
  )
}