import renderComponent from "./renderComponent/renderComponent";

export default
  () => {

    let previous = null

    const store = window.__STORE__

    store
      .subscribe(() => {

        const next = store
          .getState()
          .auth
          .user

        // TODO deep buildings check
        if (next
            && next.buildings) {

          renderComponent()
        }

        if (!previous
            && next) {

          $('#summary')
            .addClass('d-none')
        }

        if (previous
            && !next) {

          $('#summary')
            .removeClass('d-none')
        }

        previous = next
      })
  }