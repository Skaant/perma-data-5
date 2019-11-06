import {
  AUTH_SWITCH_FORM,
  AUTH_UPDATE_FORM_FIELD
} from '../../_actions/auth.actions'

export default (
  state = {
    mode: 'signin',
    email: '',
    password: ''
  },
  {
    type,
    mode,
    field
  }
) => {

  switch (type) {

    case AUTH_SWITCH_FORM:
      
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