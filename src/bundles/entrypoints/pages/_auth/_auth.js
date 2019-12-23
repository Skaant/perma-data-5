
import _initializer from '../../_initializer/_initializer'
import { AUTH_LOAD_BUNDLE_SUCCESS } from '../../../modules/auth/_actions/auth.actions'

export default bundle => {

  window.__STORE__
    .dispatch({
      type: AUTH_LOAD_BUNDLE_SUCCESS
    })

  _initializer(bundle)
}