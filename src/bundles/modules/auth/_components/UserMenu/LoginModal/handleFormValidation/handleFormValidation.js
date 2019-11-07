import {
  AUTH_LOGIN_CHECK_START,
  AUTH_LOGIN_CHECK_SUCCESS,
  AUTH_LOGIN_CHECK_ERROR
} from '../../../../_actions/auth.actions'

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
    `/api/auth/${ mode }`,
    {
      method: 'PUT',
      data: {
        email,
        pseudo,
        password
      }
    }
  )
    .then(user =>
      
      store
        .dispatch({
          type: AUTH_LOGIN_CHECK_SUCCESS,
          user
        }))
    
    .catch(error =>
      
      store
        .dispatch({
          type: AUTH_LOGIN_CHECK_ERROR,
          error
        }))
}