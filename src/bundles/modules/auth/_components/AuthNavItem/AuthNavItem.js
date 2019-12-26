import React from 'react'
import {
  AUTH_LOGIN_MODAL_OPEN
} from '../../_actions/auth.actions'
import { MAIN_AUTH_USER_MODAL_OPEN } from '../../../mainAuth/_actions/mainAuth.actions'

export default ({
  tokenInitialCheck,
  user,
  modalDisplay,
  form
}) => {

  const store = window.__STORE__
  
  return (
    <React.Fragment>
      {
        !user
          && !tokenInitialCheck
          && (
            <span className='spinner-grow text-white nav-link'
                role='status'></span>
          )
      }
      {
        !user
          && tokenInitialCheck
          && (
            <span className="fas fa-user mt-2 text-white"
                style={ {
                  cursor: 'pointer'
                } }
                title="S'authentifier"
                onClick={
                  () =>

                    store.dispatch({
                      type: AUTH_LOGIN_MODAL_OPEN
                    }) }></span>
          )
      }
      {
        user
          && (
            <span className="fas fa-user-check text-white"
                style={ {
                  cursor: 'pointer'
                } }
                title={ 'Menu utilisateur de : '
                  + user.pseudo }
                onClick={
                  () =>
                  
                    store.dispatch({
                      type: MAIN_AUTH_USER_MODAL_OPEN
                    }) }></span>
          )
      }
      <div id='login-modal_anchor'></div>
      <div id='user-modal_anchor'></div>
    </React.Fragment>
  )
}