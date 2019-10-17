export default 
  updateComponent => {

    const store = window.__STORE__

    let previous = {
      value: ''
    }

    store
      .subscribe(() => {

        const next = store
          .getState()
          .search

        if (next.value !== previous.value) {

          previous = next
          updateComponent(next.value)
        }
      })
  }