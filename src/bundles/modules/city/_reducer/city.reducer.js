import { combineReducers } from 'redux'
import modalDisplay from './modalDisplay/modalDisplay'
import currentDialog from './currentDialog/currentDialog'
import dialogHistory from './dialogHistory/dialogHistory'

export default 
  combineReducers({
    modalDisplay,
    currentDialog,
    dialogHistory
  })