import React from 'react'
import {
  AUTH_LOGIN_MODAL_OPEN
} from '../../_actions/auth.actions'
import { MAIN_AUTH_USER_MODAL_OPEN } from '../../../mainAuth/_actions/mainAuth.actions'

export default ({
  checkingLogin,
  checkingToken,
  tokenInitialCheck,
  user
}) => {

  const store = window.__STORE__
  
  return (
    <React.Fragment>
      {
        !user
          && (checkingLogin
            || checkingToken)
          && (
            <span className='spinner-grow text-green nav-link'
                role='status'></span>
          )
      }
      {
        !user
          && !(checkingLogin
            || checkingToken)
          && (
            <span className="fas fa-user fa-lg text-green"
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
            <span className="fas fa-user-check fa-lg text-green"
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