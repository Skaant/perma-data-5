import {
  AUTH_LOGIN_CHECK_SUCCESS,
  AUTH_DISCONNECT,
  AUTH_TOKEN_CHECK_SUCCESS
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

    case AUTH_DISCONNECT:
      return false
    
    default:
      return state
  }
}