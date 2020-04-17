import {
  AUTH_LOGIN_MODAL_OPEN,
  AUTH_LOGIN_MODAL_CLOSE,
  AUTH_TOKEN_CHECK_SUCCESS,
  AUTH_LOGIN_CHECK_SUCCESS
} from '../../_actions/auth.actions'

export default (
  state = false,
  {
    type,
    pending
  }
) => {

  switch (type) {

    case AUTH_LOGIN_MODAL_OPEN:
      return true

    // Automatically close on authentication but
    //  on pending user (to report verification mail send)
    case AUTH_LOGIN_CHECK_SUCCESS:

      if (pending) {

        return state
      }
      
    case AUTH_LOGIN_MODAL_CLOSE:
    case AUTH_TOKEN_CHECK_SUCCESS:
      return false
    
      default:
        return state
  }
}