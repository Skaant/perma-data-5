import {
  MAIN_LOAD_BUNDLE_SUCCESS
} from '../main/_actions/main.actions'

export default () => {

  window.__MODULES__['auth-bundle'] = {
    start: () => 
      console.log(window.__STORE__.getState())
  }

  window.__STORE__
    .dispatch({
      type: MAIN_LOAD_BUNDLE_SUCCESS,
      key: 'auth-bundle'
    })
  }