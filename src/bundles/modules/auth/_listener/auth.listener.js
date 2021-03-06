import cookies from 'js-cookie'
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
  
  } else if (((previous
        && !previous.tokenInitialCheck)
      || !previous)
    && next.tokenInitialCheck
    && !next.user) {

    previous = next

    renderAuthNavItem()

  } else if (previous.user
    && !next.user) {

    $('#home-base')
      .removeClass('d-none')

    cookies
      .remove('auth')

    previous = next

    renderAuthNavItem()

  } else if (previous
      && !previous.user
      && next.user
      && !next.moduleLoaded) {

    previous = next

    loadBundle(window.PAGE_ID)

  } else if (previous
      && ((!previous.moduleLoaded
          && next.moduleLoaded)
        || (!previous.user
          && previous.moduleLoaded
          && next.user))) {

    previous = next

    renderAuthNavItem()

    $('#home-base')
      .addClass('d-none')

    unmountLoginModal()

  } else if (previous
    && previous.loginModalDisplay !== next.loginModalDisplay) {
    
    if (next.loginModalDisplay === true) {
      
      renderLoginModal()

    } else {

      unmountLoginModal()
    }

    previous = next

  } else if (previous
    && (
      JSON.stringify(previous.form) !== JSON.stringify(next.form))
      || previous.checkingLogin !== next.checkingLogin) {
    
    previous = next

    renderLoginModal()

  } else {
    
    previous = next
  }
}