import renderComponent from "../_actions/renderComponent/renderComponent";

export default () => {

    // Compare logic
    let previous = {
      value: ''
    }

    const store = window.__STORE__

    store
      .subscribe(() => {

        const next = store
          .getState()
          .search

        if (next.value !== previous.value) {

          previous = next
          
          renderComponent()
        }
      })
  }