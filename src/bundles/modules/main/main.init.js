
import ReactDOM from 'react-dom'
import initStore from './initStore/initStore';
import { combineReducers } from 'redux'
import searchReducer from '../search/_reducer/search.reducer'
import authReducer from '../auth/_reducer/login.reducer'
import searchInit from '../search/search.init'

export default pageId =>

  $(document)
    .ready(
      () => {

        window.ReactDOM = ReactDOM

        initStore(
          combineReducers({
            search: searchReducer,
            auth: authReducer
          })
        )

        searchInit()
      })