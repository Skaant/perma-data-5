import React from 'react'

export default ({
  value,
  handleValueChange,
  loadSearchResults
}) => (
  <div className='modal-body border-bottom bg-danger'>
    <div className='container'>
      <input id='search-input'
        type='text'
        className='form-control text-white mb-0 pb-0 pt-2'
        placeholder='Recherche'
        value={ value }
        onChange={ 
          e =>
            handleValueChange(e.target.value) }
        onKeyPress={ e => {
          if (e.key === 'Enter') {
            loadSearchResults()
          }
        } } />
    </div>
  </div>

)