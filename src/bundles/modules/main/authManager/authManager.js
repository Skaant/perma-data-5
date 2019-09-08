import cookies from 'js-cookie'
import initLogin from './initLogin/initLogin'

/**
 * Initializes the login loader module
 */
export default () => {

  const auth = cookies.get('auth-token')

  if (auth) {
    
  } else {
    initLogin()
  }
}