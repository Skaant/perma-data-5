import {
  AUTH_TOKEN_CHECK_START,
  AUTH_TOKEN_CHECK_SUCCESS,
  AUTH_TOKEN_CHECK_ERROR
} from '../../_actions/auth.actions'

export default (
  state = false,
  { type }
) => {

  switch (type) {

    case AUTH_TOKEN_CHECK_START:
      return true

    case AUTH_TOKEN_CHECK_SUCCESS:
    case AUTH_TOKEN_CHECK_ERROR:
      return false
    
      default:
        return state
  }
}