import { combineReducers } from 'redux'
import user from './user/user'
import modalDisplay from './modalDisplay/modalDisplay'
import form from './form/form'
import checkingLogin from './checkingLogin/checkingLogin'
import loadingModule from './loadingModule/loadingModule'
import moduleLoaded from './moduleLoaded/moduleLoaded'

export default 
  combineReducers({
    user,
    modalDisplay,
    form,
    checkingLogin,
    loadingModule,
    moduleLoaded
  })