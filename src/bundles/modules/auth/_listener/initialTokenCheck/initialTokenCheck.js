import cookies from 'js-cookie'
import renderComponent from '../renderComponent/renderComponent'
import {
  AUTH_INITIAL_TOKEN_CHECKED,
  AUTH_LOGIN_CHECK_START
} from '../../_actions/auth.actions'


export default () => {

  const auth = cookies.get('auth')

  const store = window.__STORE__

  if (auth) {

    store
      .dispatch({
        type: AUTH_LOGIN_CHECK_START
      })

  } else {

    store
      .dispatch({
        type: AUTH_INITIAL_TOKEN_CHECKED
      })
  }
}