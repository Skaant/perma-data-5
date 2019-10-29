import initUnauth from '../initUnauth/initUnauth'

/**
 * Initializes the "connected" environment
 */
const initConnected = 
  () => {

    $('#login-modal__button')
      .replaceWith(`
        <a id="login-modal__button"
            class="nav-link"
            title="Déconnexion">
          <span class="fas fa-user-check"></span>
        </a>
      `)

    $('#login-modal__button')
      .click(() =>
        initUnauth())

    $('#login-modal')
      .modal('hide')

    $('#status > img')
      .removeClass('slower')
    
    $('#summary')
      .removeClass('fadeIn')
      .addClass('fadeOut')
      .css('height', 0)
    
    $('#app__anchor')
      .removeClass('fadeOut')
      .addClass('fadeIn')

    const getUserData =
      () =>
        new Promise(
          (resolve, reject) =>
            $.get('/data/home')
              .then(data => {
                window.__STATE__
                  .data = data
                resolve()
              }))

    const authModuleStart =
      () => {

        $('#status')
          .css('height', 0)

        window.__STATE__.
          modules.auth()
      }

    if (!window.__STATE__.
      modules.auth) {

        $.getScript('/public/bundles/pages/home/auth.js')
          .then(() =>
            getUserData()
              .then(() =>
                authModuleStart()))
    } else {

      if (!window.__STATE__.data) {

        getUserData()
          .then(() =>
            authModuleStart())

      } else {
        authModuleStart()
      }
    }
  }

export default initConnected