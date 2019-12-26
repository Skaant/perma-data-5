import {
  AUTH_LOGIN_MODAL_OPEN,
  AUTH_LOGIN_MODAL_CLOSE,
  AUTH_TOKEN_CHECK_SUCCESS,
  AUTH_LOGIN_CHECK_SUCCESS
} from '../../_actions/auth.actions'

export default (
  state = false,
  { type }
) => {

  switch (type) {

    case AUTH_LOGIN_MODAL_OPEN:
      return true

    case AUTH_LOGIN_MODAL_CLOSE:
    // Automatically close on authentication 
    case AUTH_LOGIN_CHECK_SUCCESS:
    case AUTH_TOKEN_CHECK_SUCCESS:
      return false
    
      default:
        return state
  }
}