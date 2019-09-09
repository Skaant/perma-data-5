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

    /* const hideStatus =
      () =>
        $('#status')
          .css('height', 0) */
  }

export default initConnected