import authListener from './_listener/auth.listener'
import authReducer from './_reducer/auth.reducer'

export default {
  id: 'auth',
  listener: authListener,
  reducer: authReducer
}