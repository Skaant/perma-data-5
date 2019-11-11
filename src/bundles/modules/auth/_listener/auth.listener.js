import renderComponent from './renderComponent/renderComponent'
import initialTokenCheck from './initialTokenCheck/initialTokenCheck'
import setBackdropClickClose from '../../_utils/setBackdropClickClose/setBackdropClickClose'
import loadBundle from './loadBundle/loadBundle'
import { AUTH_LOGIN_MODAL_CLOSE } from '../_actions/auth.actions';

export default pageId => {

    // Compare logic
    let previous = null

    const store = window.__STORE__

    store
      .subscribe(() => {

        const next = store
          .getState()
          .auth

        console.log(previous, next)

        if (previous
            && !previous.user
            && next.user
            && !next.moduleLoaded) {

          previous = next
         
          loadBundle(pageId)
        }

        renderComponent()

        if (previous
            && previous.modalDisplay !== next.modalDisplay) {
         
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
        }

        previous = next
      })
          
    initialTokenCheck()
  }