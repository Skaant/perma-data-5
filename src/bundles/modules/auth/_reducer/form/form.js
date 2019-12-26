import {
  AUTH_SWITCH_FORM_MODE,
  AUTH_UPDATE_FORM_FIELD,
  AUTH_LOGIN_MODAL_OPEN
} from '../../_actions/auth.actions'

export default (
  state = {
    mode: 'sign-in',
    email: '',
    pseudo: '',
    password: ''
  },
  {
    type,
    mode = 'sign-in',
    field
  }
) => {

  switch (type) {

    case AUTH_LOGIN_MODAL_OPEN:
    case AUTH_SWITCH_FORM_MODE:
      
      return Object.assign(
        {},
        state,
        { mode })

    case AUTH_UPDATE_FORM_FIELD:
      
      const {
        key,
        value
      } = field

      return Object.assign(
        {},
        state,
        { [key]: value })
    
    default:
      return state
  }
}