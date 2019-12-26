import cookies from 'js-cookie'
import {
  AUTH_INITIAL_TOKEN_CHECKED,
  AUTH_TOKEN_CHECK_SUCCESS,
  AUTH_TOKEN_CHECK_START
} from '../../_actions/auth.actions'


export default () => {

  const auth = cookies.get('auth')

  const store = window.__STORE__

  if (auth) {

    store
      .dispatch({
        type: AUTH_TOKEN_CHECK_START
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