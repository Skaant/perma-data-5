import React from 'react'
import SearchInput from './SearchInput/SearchInput'
import SearchModal from './SearchModal/SearchModal'
import loadSearchResults from './loadSearchResults/loadSearchResults'
import { SEARCH_MODAL_CLOSE, SEARCH_VALUE_CHANGE } from '../../_actions/search.actions';

export default ({
  value,
  loadStatus,
  searchResults
}) => {

  const store = window.__STORE__

  const handleValueChange = value =>

    store
      .dispatch({
        type: SEARCH_VALUE_CHANGE,
        value
      })

  const closeModal = () =>

    store
      .dispatch({
        type: SEARCH_MODAL_CLOSE
      })
  
  return (
    <React.Fragment>
  
      <SearchInput
          value={ value }
          handleValueChange={ handleValueChange }
          loadSearchResults={ loadSearchResults }
          closeModal={ closeModal } />
  
      <SearchModal
          value={ value }
          handleValueChange={ handleValueChange }
          loadStatus={ loadStatus }
          searchResults={ searchResults }
          loadSearchResults={ loadSearchResults }
          closeModal={ closeModal } />
    </React.Fragment>
  )
}