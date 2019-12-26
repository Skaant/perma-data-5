import React from 'react'
import SearchResults from './SearchResults/SearchResults';
import SearchModalInput from './SearchModalInput/SearchModalInput';
import { AUTH_LOGIN_MODAL_CLOSE } from '../../../auth/_actions/auth.actions';

export default ({
  value,
  loadStatus,
  searchResults
}) => {

  const closeModal = () =>

    window.__STORE__
      .dispatch({
        type: AUTH_LOGIN_MODAL_CLOSE
      })
  
  return (
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
                onClick={ closeModal }>
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <SearchModalInput value={ value }/>
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
}