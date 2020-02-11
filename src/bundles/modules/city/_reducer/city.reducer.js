import { combineReducers } from 'redux'
import buildings from './buildings/buildings'
import serverAction from './serverAction/serverAction'

export default 
  combineReducers({
    buildings,
    serverAction
  })