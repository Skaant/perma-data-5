import React from 'react'
import SearchResults from './SearchResults/SearchResults';
import SearchModalInput from './SearchModalInput/SearchModalInput';

export default ({
  value,
  handleValueChange,
  loadStatus,
  searchResults,
  loadSearchResults
}) => (
  <div id="search-modal"
      className='modal fade right'>
    <div className='modal-dialog modal-side modal-top-right mr-4'
        role='document'>
      <div className='modal-content'>
        <div className='modal-header'>
          <h5 className='modal-title'>
            Recherche</h5>
          <button type="button"
              className="close"
              onClick={ () =>
                
                $('#search-modal')
                  .modal('hide') }>
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <SearchModalInput value={ value }
            handleValueChange={ handleValueChange }
            loadSearchResults={ loadSearchResults }/>
        <div className='modal-body'>
          {
            loadStatus
              && (
                <div className='spinner-grow'
                    role='status'>
                  <span className='sr-only'></span>
                </div>
              )
          }
          {
            searchResults
              && (
                <SearchResults searchResults={ searchResults }/>
              )
          }
        </div>
      </div>
    </div>
  </div>
)