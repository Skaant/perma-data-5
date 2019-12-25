import renderAuthNavItem from './renderAuthNavItem/renderAuthNavItem'
import initialTokenCheck from './initialTokenCheck/initialTokenCheck'
import loadBundle from './loadBundle/loadBundle'
import renderLoginModal from './renderLoginModal/renderLoginModal'
import unmountLoginModal from './unmountLoginModal/unmountLoginModal'

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

    renderAuthNavItem()

  } else if (previous.user
    && !next.user) {

    previous = next

    renderAuthNavItem()

  } else if (previous
      && !previous.user
      && next.user
      && !next.moduleLoaded) {

    previous = next

    loadBundle(
      window.PAGE_ID,
      next.user)

  } else if (previous
      && ((!previous.moduleLoaded
          && next.moduleLoaded)
        || (!previous.user
          && previous.moduleLoaded
          && next.user))) {

    previous = next

    renderAuthNavItem()

    unmountLoginModal()

  } else if (previous
      && previous.loginModalDisplay !== next.loginModalDisplay) {
    
    if (next.loginModalDisplay === true) {
      
      renderLoginModal()

    } else {

      $('#login-modal')
        .modal('hide')
    }

  } else if (previous
    && previous.form.mode !== next.form.mode) {
    
    previous = next

    renderLoginModal()

  } /* else {
    
    previous = next

    renderAuthNavItem()
  } */
}