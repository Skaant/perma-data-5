import React from 'react'
import { MAIN_AUTH_USER_MODAL_CLOSE } from '../../_actions/mainAuth.actions'

export default ({
  _id,
  pseudo
}) => {

  const closeModal = () =>
    store
      .dispatch({
        type: MAIN_AUTH_USER_MODAL_CLOSE
      })

  return (
    <div id='user-modal'
        className='modal fade show'>
      <div className='modal-dialog'
          role='document'
          style={ {
            marginTop: '60px'
          } }>
        <div className='modal-content'>
          <div className='modal-header'
              style={ {
                backgroundColor: '#7cb342'
              } }>
            <h1 className='modal-title text-white'
                style={ {
                  margin: '60px 45px 30px'
                } }>
                <b className='font-epic'>
                  { pseudo }</b></h1>
            <button type='button'
                className='close'
                onClick={ closeModal }>
              <span aria-hidden='true'>&times;</span>
            </button>
          </div>
          <div className='modal-body'>
            <div className='row justify-content-right'>
              <div className='col-12 col-md-4'>
                <button className='btn btn-outline-white'
                    style={ {
                      letterSpacing: '3px'
                    } }>
                    type='button'>
                  Fermer</button>
              </div>
              <div className='col-12 col-md-4'>
                <button className='btn btn-white'
                    type='button'
                    style={ {
                      borderColor: '#7cb342 !important',
                      letterSpacing: '3px'
                    } }>
                  Se déconnecter</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}