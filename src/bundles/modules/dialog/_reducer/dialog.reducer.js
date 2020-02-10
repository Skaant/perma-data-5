import { combineReducers } from 'redux'
import modalDisplay from './modalDisplay/modalDisplay'
import currentDialog from './currentDialog/currentDialog'
import history from './history/history'

export default 
  combineReducers({
    modalDisplay,
    currentDialog,
    history
  })