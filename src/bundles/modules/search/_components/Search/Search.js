import React from 'react'
import SearchInput from './SearchInput/SearchInput'
import SearchModal from './SearchModal/SearchModal'
import handleValueChange from '../../_actions/handleValueChange/handleValueChange'
import loadSearchResults from '../../_actions/loadSearchResults/loadSearchResults'

export default ({
  value,
  loadStatus,
  searchResults
}) => (
  <React.Fragment>

    <SearchInput
        value={ value }
        handleValueChange={ handleValueChange }
        loadSearchResults={ loadSearchResults }
        openModal={ () =>
          modal.modal('show') }/>

    <SearchModal
        value={ value }
        handleValueChange={ handleValueChange }
        loadStatus={ loadStatus }
        searchResults={ searchResults }
        loadSearchResults={ loadSearchResults }
        closeModal={ () =>
          modal.modal('hide') }/>
  </React.Fragment>
)