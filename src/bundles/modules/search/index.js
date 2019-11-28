import searchReducer from './_reducer/search.reducer'
import searchListener from './_listener/search.listener';

export default {
  id: 'search',
  reducer: searchReducer,
  listener: searchListener
}