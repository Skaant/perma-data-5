import React from 'react'

export default ({
  value,
  handleValueChange,
  loadSearchResults
}) => (
  <input id='search-input'
      type='text'
      className='form-control text-white mb-0 pb-0 pt-2'
      placeholder='Trouvez des plantes'
      value={ value }
      onChange={ e =>
        handleValueChange(e.target.value) }
      onKeyPress={ e => 
        e.key === 'Enter'
          && loadSearchResults() } />
)