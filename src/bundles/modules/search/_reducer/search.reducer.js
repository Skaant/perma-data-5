import { combineReducers } from 'redux'
import value from './value/value'
import loadStatus from './loadStatus/loadStatus'
import searchResults from './searchResults/searchResults'
import loginModalDisplay from './loginModalDisplay/loginModalDisplay'

export default 
  combineReducers({
    value,
    loadStatus,
    searchResults,
    loginModalDisplay
  })