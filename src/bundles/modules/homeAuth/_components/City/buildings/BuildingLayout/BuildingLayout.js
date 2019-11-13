import React from 'react'
import _trighbs from './_data/trighbs.json'
import _buildings from './_data/buildings'
import _quests from './_data/quests'

export default building => {

  const {
    key
  } = building

  const _building = _buildings[
    building.key]
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
            `px-2 py-1 ${ _trighbs[_buildings[key].trighb].color } mr-1` }>
            { _trighb }</span>
          { _buildings[key].name }</h4>
      </div>
    </div>
  )
}