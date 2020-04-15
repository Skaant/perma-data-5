import React from 'react'
import SearchResults from './SearchResults/SearchResults';
import SearchModalInput from './SearchModalInput/SearchModalInput';
import { SEARCH_MODAL_CLOSE } from '../../_actions/search.actions';

export default ({
  value,
  loadStatus,
  searchResults
}) => {

  const closeModal = () =>

    window.__STORE__
      .dispatch({
        type: SEARCH_MODAL_CLOSE
      })
  
  return (
    <div id="search-modal"
        className='modal fade right'>
      <div className='modal-dialog'
          role='document'
          style={ {
            marginTop: '60px'
          } }>
        <div className='modal-content'>
          <div className='modal-header z-depth-2 p-4'>
            <div className='container p-0'>
              <h1 className='mt-5 mb-4'>
                Recherche de plantes</h1>
              <div className='md-form'>
                <SearchModalInput value={ value }/>
              </div>
            </div>
            <button type="button"
                className="close"
                onClick={ closeModal }>
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div className='modal-body p-4'
              // From the `modal-body`, should be moved to `SearchResults`
              style={ {
                backgroundColor: '#7cb342'
              } }>
            {
              loadStatus
                && (
                  <p className='text-white mt-4 mb-0'>
                    Chargement ...</p>
                )
            }
            {
              searchResults
                && (
                  <React.Fragment>
                    <SearchResults searchResults={ searchResults }/>
                    <p className='text-white mt-4 mb-0'>
                      { searchResults.length } résultat{ searchResults.length === 1 ? '' : 's'}.</p>
                  </React.Fragment>
                )
            }
            {
              !loadStatus
                && (!searchResults
                  || searchResults.length === 0)
                && (
                  <p className='text-white mt-4 mb-0'>
                    Aucun résultat.</p>
                )
            }
          </div>
        </div>
      </div>
    </div>
  )
}