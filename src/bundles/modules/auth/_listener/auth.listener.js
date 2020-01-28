import renderComponent from './renderComponent/renderComponent'
import renderLoginModal from './renderLoginModal/renderLoginModal'
import initialTokenCheck from './initialTokenCheck/initialTokenCheck'
import setBackdropClickClose from '../../_utils/setBackdropClickClose/setBackdropClickClose'
import loadBundle from './loadBundle/loadBundle'
import { AUTH_LOGIN_MODAL_CLOSE } from '../_actions/auth.actions'

let previous = null

export default () => {

  const next = window.__STORE__
    .getState()
    .auth

  if (!previous) {

    previous = next

    initialTokenCheck()
  
  } else if (previous
    && !previous.tokenInitialCheck
    && next.tokenInitialCheck
    && !next.user) {

    previous = next

    renderComponent()

  } else if (previous
      && !previous.user
      && next.user
      && !next.moduleLoaded) {

    previous = next

    loadBundle(window.PAGE_ID)

  } else if (previous
      && !previous.moduleLoaded
      && next.moduleLoaded) {

    previous = next

    renderComponent()

  } else if (previous
      && previous.modalDisplay !== next.modalDisplay) {
    
    previous = next
    
    if (next.modalDisplay === true) {
      
      $('#login-modal')
        .modal('show')

      setBackdropClickClose(
        '#login-modal',
        AUTH_LOGIN_MODAL_CLOSE
      )

    } else {

      $('#login-modal')
        .modal('hide')
    }

    previous = next

  } else if (previous
    && JSON
      .stringify(previous.form)
      !== JSON
        .stringify(next.form)) {
    
    previous = next

    renderLoginModal()

  } else {
    
    previous = next
  }
}