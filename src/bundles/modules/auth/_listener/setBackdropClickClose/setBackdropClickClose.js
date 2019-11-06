import {
  AUTH_LOGIN_MODAL_CLOSE
} from '../../_actions/auth.actions'

// MDB-REACT ?
export default () =>

  setTimeout(
    () =>
      $('#login-modal')
        .on(
          'click',
          e => {

            if (e.target === $('#login-modal')[0]) {

              e.preventDefault()

              window.__STORE__
                .dispatch({
                  type: AUTH_LOGIN_MODAL_CLOSE
                })
            }
          }),
    1
  )