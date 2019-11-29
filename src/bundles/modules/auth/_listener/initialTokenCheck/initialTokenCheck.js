import cookies from 'js-cookie'
import {
  AUTH_INITIAL_TOKEN_CHECKED,
  AUTH_LOGIN_CHECK_START,
  AUTH_TOKEN_CHECK_SUCCESS
} from '../../_actions/auth.actions'


export default () => {

  const auth = cookies.get('auth')

  const store = window.__STORE__

  if (auth) {

    store
      .dispatch({
        type: AUTH_LOGIN_CHECK_START
      })

    $.get('/api/auth/check-token')
      .then(user =>

        store
          .dispatch({
            type: AUTH_TOKEN_CHECK_SUCCESS,
            user
          }))

  } else {

    store
      .dispatch({
        type: AUTH_INITIAL_TOKEN_CHECKED
      })
  }
}