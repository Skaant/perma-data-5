import ReactDOM from 'react-dom'
import React from 'react'
import cookies from 'js-cookie'
import initConnected from '../initConnected/initConnected'
import LoginModal from '../../../auth/_components/LoginModal/LoginModal'

/**
 * Initializes the "unauth" environment
 */
const initAuth =
  () => {

    $('#login-modal__button')
      .replaceWith(`
        <a id="login-modal__button"
            class="nav-link"
            title="Connexion">
          <span class="fas fa-user"></span>
        </a>
      `)

    // first time initialization
    if (!window.__STATE__.
      modules.login) {
    
        ReactDOM
          .render(
            <LoginModal
                initConnected={ initConnected }
                closeModal={
                  () =>
                    $('#login-modal')
                      .modal('hide')
                }/>,
            $('#login-modal__anchor')[0]
          )

        window.__STATE__
          .modules.login = true

      }     

      cookies.remove('auth-token')
      cookies.remove('auth-email')

      $('#login-modal__button')
        .click(() =>
          $('#login-modal')
            .modal('show'))
            
      $('#status')
        .css('height', 'initial')
      
      $('#status > img')
        .removeClass('fadeIn')
        .addClass('fadeInDown slower')

      $('#summary')
        .css('height', 'initial')
        .removeClass('fadeOut')
        .addClass('fadeIn')

      $('#app__anchor')
        .html('Déconnexion ...')
        .removeClass('fadeIn')
        .addClass('fadeOut')
      
      setTimeout(
        () =>
          $('#app__anchor')
            .html(`
              <div class="container">
                <div class="row">
                  <div class="alert alert-info col-12">
                    Chargement de l'application ...
                  </div>
                </div>
              </div>
            `),
        1500)
    }

export default initAuth