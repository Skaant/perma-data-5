export default () => {

      // Compare logic
      let previous = null

      const store = window.__STORE__
  
      store
        .subscribe(() => {
  
          const next = store
            .getState()
            .main

          if ((!previous
              && next.error)
            || (previous
              && previous.error.message !== next.error.message)) {
            
            previous = next

            return alert(next.error.message)
          }

          // Update the compare logic
          previous = next
        })
}