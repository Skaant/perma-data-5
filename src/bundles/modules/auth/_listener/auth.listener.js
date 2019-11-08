import renderComponent from './renderComponent/renderComponent'
import initialTokenCheck from './initialTokenCheck/initialTokenCheck'
import setBackdropClickClose from './setBackdropClickClose/setBackdropClickClose'
import loadBundle from './loadBundle/loadBundle'

export default pageId => {

    // Compare logic
    let previous = null

    const store = window.__STORE__

    store
      .subscribe(() => {

        const next = store
          .getState()
          .auth

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

            setBackdropClickClose()

            previous = next

          } else {

            $('#login-modal')
              .modal('hide')
          }
        }

        previous = next
      })
          
    initialTokenCheck()
  }