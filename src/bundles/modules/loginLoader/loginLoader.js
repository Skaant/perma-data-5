import cookies from 'js-cookie'

/**
 * Initializes the login loader module
 */
export default () => {

  const auth = cookies.get('auth-token')

  // TODO treat { user menu }::disconnect
  if (!auth) {
  
    const loginButton = $('#login-button')

    loginButton
      .click(() => {

        const loginButtonClone = loginButton.replaceWith(`
          <div id="login-module--waiting"
              class="spinner-grow text-white" role="status">
            <span class="sr-only"></span>
          </div>`)

        $.getScript('/public/bundles/context/login.js', () => {

          $('#login-module--waiting').replaceWith(
            loginButtonClone)

          window.__MODULES__['login']()
        })
      })
  }
}