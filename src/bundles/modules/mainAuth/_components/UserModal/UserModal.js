import React from 'react'
import { AUTH_DISCONNECT } from '../../../auth/_actions/auth.actions'

export default ({
  user,
  closeModal
}) => (
  <div id='user-modal'
      className='modal fade show'>
    <div className='modal-dialog'
        role='document'
        style={ {
          marginTop: '60px'
        } }>
      <div className='modal-content'>
        <div className='modal-header z-depth-2'>
          <div className='container'>
            <div className='row'>
              <h1 className='h5 font-weight-lighter'
                  style={ {
                    margin: '60px 45px 0'
                  } }>
                Menu utilisateur de :</h1>
            </div>
            <div className='row'>
              <h2 className='modal-title h1'
                  style={ {
                    margin: '0 45px 30px'
                  } }>
                  <b className='font-epic'>
                    { user.pseudo }</b></h2>
            </div>
          </div>
          <button type='button'
              className='close'
              onClick={ closeModal }>
            <span aria-hidden='true'>&times;</span>
          </button>
        </div>
        <div className='modal-body'
            style={ {
              backgroundColor: '#7cb342'
            } }>
          <div className='row justify-content-right px-4'>
            <div className='col-12 col-md-6 py-3'>
              <button className='btn btn-white w-100 p-3'
                  type='button'
                  onClick={
                    () =>

                      window.__STORE__
                        .dispatch({
                          type: AUTH_DISCONNECT
                        })
                  }
                  style={ {
                    letterSpacing: '3px'
                  } }>
                Déconnexion</button>
            </div>
            <div className='col-12 col-md-6 py-3'>
              <button className='btn btn-outline-white w-100 p-3'
                  type='button'
                  onClick={ closeModal }
                  style={ {
                    letterSpacing: '3px'
                  } }>
                Fermer</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
)