import React from 'react'
import {
  AUTH_LOGIN_MODAL_OPEN
} from '../../_actions/auth.actions'

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
                style={ { cursor: 'pointer' } }
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
            /**
             * `id='auth-user-menu'` is used as an anchor to
             *  render `UserMenu`. */
            <span  id='auth-user-menu'
                className="fas fa-user-check text-white"
                title={ user.email }></span>
          )
      }
      <div id='login-modal_anchor'></div>
      <div id='user-panel_anchor'></div>
    </React.Fragment>
  )
}