import {
  CITY_DIALOG_MODAL_OPEN,
  CITY_DIALOG_MODAL_CLOSE
} from '../../_actions/homeAuth.actions'

export default (
  state = false,
  { type }
) => {

  switch (type) {

    case CITY_DIALOG_MODAL_OPEN:
      return true

    case CITY_DIALOG_MODAL_CLOSE:
      return false
    
      default:
        return state
  }
}