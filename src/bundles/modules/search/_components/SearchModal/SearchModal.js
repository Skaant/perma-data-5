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
      <div className='modal-dialog'
          role='document'
          style={ {
            marginTop: '60px'
          } }>
        <div className='modal-content'>
          <div className='modal-header z-depth-2'>
            <div className='container'>
              <div className='row'>
                <h1 className='h2 font-weight-lighter'
                    style={ {
                      margin: '60px 45px 0'
                    } }>
                  Trouvez des plantes :</h1>
              </div>
              <div className='row'
                  style={ {
                    margin: '10px 45px 30px'
                  } }>
                <SearchModalInput value={ value }/>
              </div>
            </div>
            <button type="button"
                className="close"
                onClick={ closeModal }>
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div className='modal-body px-4 pt-3 pb-1'
              // From the `modal-body`, should be moved to `SearchResults`
              style={ {
                backgroundColor: '#7cb342'
              } }>
            {
              loadStatus
                && (
                  <div className='spinner-grow text-white'
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