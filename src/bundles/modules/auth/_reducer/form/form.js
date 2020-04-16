import {
  AUTH_SWITCH_FORM_MODE,
  AUTH_UPDATE_FORM_FIELD,
  AUTH_LOGIN_MODAL_OPEN
} from '../../_actions/auth.actions'
import {
  SIGN_IN,
  SIGN_UP,
  RECOVER
} from '../../_enums/mode/mode.enum'
import {
  FORM_ERROR_EMAIL,
  FORM_ERROR_PSEUDO,
  FORM_ERROR_PASSWORD
} from '../../_enums/error/error.enum'

const checkErrors = state => {

  let errors = []

  !state.email.match(/..*\@..*\...*/)
    && errors.push(FORM_ERROR_EMAIL)

  state.mode === SIGN_UP
    && state.pseudo.length < 5
    && errors.push(FORM_ERROR_PSEUDO)

  state.mode !== RECOVER
    && state.password.length < 8
    && errors.push(FORM_ERROR_PASSWORD)

  return errors
}

export default (
  state = {
    mode: SIGN_IN,
    email: '',
    pseudo: '',
    password: '',
    errors: {}
  },
  {
    type,
    mode = SIGN_IN,
    field
  }
) => {

  switch (type) {

    case AUTH_LOGIN_MODAL_OPEN:
    case AUTH_SWITCH_FORM_MODE:
      
      const newStateA = Object.assign(
        {},
        state,
        { mode }
      )

      return {
        ...newStateA,
        errors: checkErrors(newStateA)
      }

    case AUTH_UPDATE_FORM_FIELD:
      
      const {
        key,
        value
      } = field

      const newStateB = Object.assign(
        {},
        state,
        { [key]: value }
      )

      return {
        ...newStateB,
        errors: checkErrors(newStateB)
      }
    
    default:
      return state
  }
}