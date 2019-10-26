import renderComponent from "../_actions/renderComponent/renderComponent";

export default () => {

    // Compare logic
    let previous = {
      error: null
    }

    const store = window.__STORE__

    store
      .subscribe(() => {

        const next = store
          .getState()

        if (next.error
            && next.error !== previous.error) {

          previous = next
          
          alert(next.error)
        }
      })
  }