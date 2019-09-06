import React from 'react'

export default ({
  searchValue,
  setSearchValue,
  loadSearchResults
}) => (
  <div className='modal-body border-bottom bg-danger'>
    <div className='container'>
      <input id='search-input'
        type='text'
        className='form-control text-white mb-0 pb-0 pt-2'
        placeholder='Recherche'
        value={ searchValue }
        onChange={ setSearchValue }
        onKeyPress={ e => {
          if (e.key === 'Enter') {
            loadSearchResults()
          }
        } } />
    </div>
  </div>

)