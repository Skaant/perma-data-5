import React from 'react'
import {
  AUTH_LOGIN_MODAL_OPEN,
  AUTH_LOGIN_MODAL_CLOSE
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
            <span className="fas fa-user mt-2"
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
            <span className="fas fa-user-check"
                title={ user.email }></span>
          )
      }
      <LoginModal modalDisplay={ modalDisplay }
          { ...form }/>
      <div id='todo--auth__user-modal__component'></div>
    </React.Fragment>
  )
}