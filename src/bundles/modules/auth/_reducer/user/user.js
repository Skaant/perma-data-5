import {
  AUTH_LOGIN_CHECK_SUCCESS,
  AUTH_TOKEN_CHECK_SUCCESS,
  AUTH_UNAUTH
} from '../../_actions/auth.actions'

export default (
  state = false,
  {
    type,
    user
  }
) => {

  switch (type) {

    case AUTH_LOGIN_CHECK_SUCCESS:
    case AUTH_TOKEN_CHECK_SUCCESS:
      return user

    case AUTH_UNAUTH:
      return false
    
    default:
      return state
  }
}