import {
  MAIN_NOTIFICATIONS_NEW,
  MAIN_NOTIFICATIONS_SHIFT
} from '../../_actions/main.actions'

export default (
  state = [],
  { 
    type,
    notifications
  }
) => {

  switch (type) {

    case MAIN_NOTIFICATIONS_NEW:
      return [
        ...state,
        ...notifications
      ]

    case MAIN_NOTIFICATIONS_SHIFT:
      return state
        .slice(1)
    
      default:
        return state
  }
}