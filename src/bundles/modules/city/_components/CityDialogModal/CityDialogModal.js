import React from 'react'
import { CITY_DIALOG_MODAL_CLOSE } from '../../_actions/city.actions';
import { cpus } from 'os';

export default ({ dialog }) => {

  const closeModal = () =>
    store
      .dispatch({
        type: CITY_DIALOG_MODAL_CLOSE
      })

  // TEMP [0] is for page
  const page = dialog.pages[0]

  return (
    <div id='city-dialog-modal'
        className='modal fade right show'>
      <div className='modal-dialog modal-side modal-top-right mr-4'
          role='document'>
        <div className='modal-content'>
          <div className='modal-header'>
            <h5 className='modal-title text-danger'>
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