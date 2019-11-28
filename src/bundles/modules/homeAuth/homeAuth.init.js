import {
  MAIN_LOAD_BUNDLE_SUCCESS
} from '../../entrypoints/_bundles/main/_actions/main.actions'
import homeAuthListener from './_listener/homeAuth.listener';
import {
  HOME_AUTH_STARTED
} from './_actions/homeAuth.actions';

export default () => {

  const store = window.__STORE__

  window.__MODULES__['auth-bundle'] = {
    start: () => {

      homeAuthListener()

      store
        .dispatch({
          type: HOME_AUTH_STARTED
        })
    }
  }

  store
    .dispatch({
      type: MAIN_LOAD_BUNDLE_SUCCESS,
      key: 'auth-bundle'
    })
}