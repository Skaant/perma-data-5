import mainListener from './_listener/main.listener'
import mainReducer from './_reducer/main.reducer'

export default {
  id: 'main',
  reducer: mainReducer,
  listener: mainListener
}