import {
  AUTH_LOGIN_CHECK_START,
  AUTH_LOGIN_CHECK_SUCCESS,
  AUTH_LOGIN_CHECK_ERROR
} from '../../_actions/auth.actions'

export default (
  state = false,
  { type }
) => {

  switch (type) {

    case AUTH_LOGIN_CHECK_START:
      return true

    case AUTH_LOGIN_CHECK_SUCCESS:
    case AUTH_LOGIN_CHECK_ERROR:
      return false
    
      default:
        return state
  }
}