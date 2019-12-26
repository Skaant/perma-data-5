import React from 'react'
import setBackdropClickClose from '../../../_utils/setBackdropClickClose/setBackdropClickClose'
import UserModal from '../../_components/UserModal/UserModal'
import { MAIN_AUTH_USER_MODAL_CLOSE } from '../../_actions/mainAuth.actions'

export default () => {

  const store = window.__STORE__

  const { 
    auth
  } = store
    .getState()
  
  window.ReactDOM
    .render(
      <UserModal
        user={ auth.user }
        closeModal={ 
          () =>

            store
              .dispatch({
                type: MAIN_AUTH_USER_MODAL_CLOSE
              }) }/>,
      $('#user-modal_anchor')[0])

  $('#user-modal')
    .modal('show')

  setBackdropClickClose(
    '#user-modal',
    MAIN_AUTH_USER_MODAL_CLOSE
  )
}