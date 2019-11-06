import renderComponent from './renderComponent/renderComponent'
import initialTokenCheck from './initialTokenCheck/initialTokenCheck'
import setBackdropClickClose from './setBackdropClickClose/setBackdropClickClose';

export default () => {

    // Compare logic
    let previous = null

    const store = window.__STORE__

    store
      .subscribe(() => {

        const next = store
          .getState()
          .auth

        renderComponent()

        if (previous
            && previous.modalDisplay !== next.modalDisplay) {
         
          if (next.modalDisplay === true) {
            
            $('#login-modal')
              .modal('show')

            setBackdropClickClose()

          } else {

            $('#login-modal')
              .modal('hide')
          }
        }

        previous = next
      })
          
    initialTokenCheck()
  }