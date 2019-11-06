import renderComponent from './renderComponent/renderComponent'
import authInit from './_init/auth.init'

export default () => {

    // Compare logic
    let previous = null

    const store = window.__STORE__

    store
      .subscribe(() => {

        const next = store
          .getState()
          .auth

        if (!previous) {
          
          renderComponent()
          
        } else {
        }

        previous = next
      })
          
    authInit()
  }