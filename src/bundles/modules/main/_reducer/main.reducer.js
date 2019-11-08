import { combineReducers } from 'redux'
import error from './error/error'
import bundles from './bundles/bundles'

export default 
  combineReducers({
    error,
    bundles
  })