import mainAuthReducer from './_reducer/mainAuth.reducer'
import mainAuthListener from './_listener/mainAuth.listener'

export default {
  id: 'mainAuth',
  reducer: mainAuthReducer,
  listener: mainAuthListener
}