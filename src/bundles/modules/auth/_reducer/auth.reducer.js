import { combineReducers } from 'redux'
import tokenInitialCheck from './tokenInitialCheck/tokenInitialCheck'
import user from './user/user'
import loginModalDisplay from './loginModalDisplay/loginModalDisplay'
import form from './form/form'
import checkingToken from './checkingToken/checkingToken'
import checkingLogin from './checkingLogin/checkingLogin'
import loadingModule from './loadingModule/loadingModule'
import moduleLoaded from './moduleLoaded/moduleLoaded'

export default 
  combineReducers({
    tokenInitialCheck,
    user,
    loginModalDisplay,
    form,
    checkingToken,
    checkingLogin,
    loadingModule,
    moduleLoaded
  })