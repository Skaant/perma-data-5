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

        }

        if (next.value !== previous.value) {

          previous = next
          
          renderComponent()
        }
      })
  }