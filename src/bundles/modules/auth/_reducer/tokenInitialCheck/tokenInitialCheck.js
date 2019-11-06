import {
  AUTH_INITIAL_TOKEN_CHECKED,
  AUTH_TOKEN_CHECK_START
} from '../../_actions/auth.actions'

export default (
  state = false,
  { type }
) => {

  switch (type) {

    case AUTH_TOKEN_CHECK_START:
    case AUTH_INITIAL_TOKEN_CHECKED:
      return true

    default:
      return state
  }
}