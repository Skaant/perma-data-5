export default () => {

      // Compare logic
      let previous = null

      const store = window.__STORE__
  
      store
        .subscribe(() => {
  
          const next = store
            .getState()
            .main

          if (((!previous
                || !previous.error)
              && next.error)
            || (previous
              && previous.error !== next.error)) {
            
            alert(next.error)
          }

          // Update the compare logic
          previous = next
        })
}