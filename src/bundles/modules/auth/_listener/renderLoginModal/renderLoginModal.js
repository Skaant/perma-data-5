import React from 'react'
import LoginModal from '../../_components/LoginModal/LoginModal'
import setBackdropClickClose from '../../../_utils/setBackdropClickClose/setBackdropClickClose'
import { AUTH_LOGIN_MODAL_CLOSE } from '../../_actions/auth.actions'

export default () => {

  const { 
    auth
  } = window.__STORE__
    .getState()
  
  window.ReactDOM
    .render(
      <LoginModal { ...auth.form }
          checkingLogin={ auth.checkingLogin } />,
      document
        .getElementById('login-modal_anchor'))

  $('#login-modal')
    .modal('show')

  setBackdropClickClose(
    '#login-modal',
    AUTH_LOGIN_MODAL_CLOSE
  )
}