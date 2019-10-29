import cookies from 'js-cookie'
import initConnected from './initConnected/initConnected'
import initUnauth from './initUnauth/initUnauth'

/**
 * Initializes the login loader module
 */
export default
  pageId => {

    const auth = cookies.get('auth-token')

    if (auth) {
      initConnected(pageId)
    } else {
      initUnauth()
    }
  }