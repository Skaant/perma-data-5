import { combineReducers } from 'redux'
import value from './value/value'
import loadStatus from './loadStatus/loadStatus'
import searchResults from './searchResults/searchResults'

export default 
  combineReducers({
    value,
    loadStatus,
    searchResults
  })