import renderCity from './renderCity/renderCity'

export default
  () => {

    let previousUser = null
    let previousHomeAuth = null

    const store = window.__STORE__

    store
      .subscribe(() => {

        const nextUser = store
          .getState()
          .auth
          .user

        const nextHomeAuth = store
          .getState()
          .homeAuth

        // TODO deep buildings check
        if (nextUser
            && nextUser.buildings) {

          renderCity()
        }

        if (!previousUser
            && nextUser) {

          $('#summary')
            .addClass('d-none')
        }

        if (previousUser
            && !nextUser) {

          $('#summary')
            .removeClass('d-none')
        }

        if ((!previousHomeAuth
            || previousHomeAuth.modalDisplay)
          && nextHomeAuth.modalDisplay) {

            $('#city-dialog-modal')
            .modal('show')
        }

        if (previousHomeAuth
          && previousHomeAuth.modalDisplay
          && !nextHomeAuth.modalDisplay) {

            $('#city-dialog-modal')
              .modal('hide')
          }

        previousUser = nextUser
      })
  }