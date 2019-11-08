import { 
  MAIN_ERROR_THROWN,
  MAIN_ERROR_DISMISS
} from '../../_actions/main.actions'

export default (
  state = false,
  { 
    type,
    error
  }
) => {

  switch (type) {

    case MAIN_ERROR_THROWN:
      return error

    case MAIN_ERROR_DISMISS:
      return false
    
      default:
        return state
  }
}