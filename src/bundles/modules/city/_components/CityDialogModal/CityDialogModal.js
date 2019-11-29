import React from 'react'
import { CITY_DIALOG_MODAL_CLOSE } from '../../_actions/city.actions';

export default ({ dialog }) => {

  const closeModal = () =>
    store
      .dispatch({
        type: CITY_DIALOG_MODAL_CLOSE
      })

  return (
    <div id='city-dialog-modal'
        className='modal fade right show'>
      <div className='modal-dialog modal-side modal-top-right mr-4'
          role='document'>
        <div className='modal-content'>
          <div className='modal-header'>
            <h5 className='modal-title text-danger'>
              { dialog.title }</h5>
            <button type='button'
                className='close'
                onClick={ closeModal }>
              <span aria-hidden='true'>&times;</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}