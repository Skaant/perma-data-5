import { MAIN_ERROR_DISMISS } from "../_actions/main.actions";

export default () => {

    // Compare logic
    let previous = null

    const store = window.__STORE__

    store
      .subscribe(() => {

        const next = store
          .getState()
          .main

        if (next.error
            && (!previous
              || next.error !== previous.error)) {

          previous = next
          
          alert(next.error)

          store
            .dispatch({
              type: MAIN_ERROR_DISMISS
            })
        }

        if (
            (!previous
              && next.bundles.length > 0)
            || (previous
                && next.bundles.length > previous.bundles.length)) {
          
          previous = next

          window.__MODULES__[
            next.bundles[
              next.bundles.length - 1]]
            .start()
        }
      })
  }