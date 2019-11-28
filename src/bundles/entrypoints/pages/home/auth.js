import homeAuth from '../../../modules/homeAuth/homeAuth.init'
import { AUTH_BUNDLE_START } from '../_actions/auth.bundle.action';

homeAuth()

window.__STORE__
  .dispatch({
    type: AUTH_BUNDLE_START
  })