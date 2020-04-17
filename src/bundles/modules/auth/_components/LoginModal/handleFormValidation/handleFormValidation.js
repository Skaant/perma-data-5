import {
  AUTH_LOGIN_CHECK_START,
  AUTH_LOGIN_CHECK_SUCCESS,
  AUTH_LOGIN_CHECK_ERROR
} from '../../../_actions/auth.actions'

export default (
  mode,
  {
    email,
    pseudo,
    password
  }
) => {

  const store = window.__STORE__

  store
    .dispatch({
      type: AUTH_LOGIN_CHECK_START
    })

  $.ajax(
    `/api/auth/${ mode.toLowerCase().replace('_', '-') }`,
    {
      method: 'PUT',
      data: {
        email,
        pseudo,
        password: btoa(password)
      }
    }
  )
    .then(result =>
      
      store
        .dispatch({
          type: AUTH_LOGIN_CHECK_SUCCESS,
          ...result
        }))
    
    .catch(error =>
      
      store
        .dispatch({
          type: AUTH_LOGIN_CHECK_ERROR,
          error: error.responseJSON
        }))
}