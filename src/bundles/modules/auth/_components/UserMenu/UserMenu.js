import React from 'react'
import {
  AUTH_LOGIN_MODAL_OPEN
} from '../../_actions/auth.actions'
import LoginModal from './LoginModal/LoginModal'

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
            <span className="fas fa-user-check text-white"
                title={ user.email }></span>
          )
      }
      <LoginModal { ...form }/>
      <div id='todo--auth__user-modal__component'></div>
    </React.Fragment>
  )
}