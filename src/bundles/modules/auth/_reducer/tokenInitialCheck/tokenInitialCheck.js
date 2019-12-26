import {
  AUTH_TOKEN_CHECK_SUCCESS, AUTH_INITIAL_TOKEN_CHECKED
} from '../../_actions/auth.actions'

export default (
  state = false,
  { type }
) => {

  switch (type) {

    case AUTH_INITIAL_TOKEN_CHECKED:
    case AUTH_TOKEN_CHECK_SUCCESS:
      return true

    default:
      return state
  }
}