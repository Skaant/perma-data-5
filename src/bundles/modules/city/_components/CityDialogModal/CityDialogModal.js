import React from 'react'
import { CITY_DIALOG_MODAL_CLOSE } from '../../_actions/city.actions';

export default ({ dialog }) => {  

  const closeModal = () =>
    window.__STORE__
      .dispatch({
        type: CITY_DIALOG_MODAL_CLOSE
      })

  const page = dialog.pages[
    window.__STORE__
      .getState()
      .city
      .history[
        dialog.id]
          .page
  ]

  return (
    <div id='city-dialog-modal'
        className='modal fade right show'>
      <div className='modal-dialog modal-dialog-centered animated zoomInUp'
          role='document'>
        <div className='modal-content'>
          <div className='modal-header'>
            <h5 className='modal-title'>
              {
                dialog.type === 'quest' && 'Quête : '
              }
              {
                dialog.type === 'dialog' && 'Dialogue : '
              }
              { dialog.title }</h5>
            <button type='button'
                className='close'
                onClick={ closeModal }>
              <span aria-hidden='true'>&times;</span>
            </button>
          </div>
          {
            page.image && (
              <div className='modal-body py-4'>
                { page.image }
              </div>
            )
          }
          {
            page.text && (
              <div className='modal-body border-top red text-white'>
                <div className='w-75 mx-auto'>
                  { page.text }
                </div>
              </div>
            )
          }
        </div>
      </div>
    </div>
  )
}