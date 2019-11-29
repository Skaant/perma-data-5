import { combineReducers } from 'redux'
import value from './value/value'
import loadStatus from './loadStatus/loadStatus'
import searchResults from './searchResults/searchResults'
import modalDisplay from './modalDisplay/modalDisplay'

export default 
  combineReducers({
    value,
    loadStatus,
    searchResults,
    modalDisplay
  })