import React from 'react'
import loadSearchResults from '../../../search/_components/_utils/loadSearchResults/loadSearchResults'
import { SEARCH_VALUE_CHANGE } from '../../../search/_actions/search.actions'

export default ({
  value
}) => (
  <input id='home-search'
      type='text'
      className='form-control font-weight-light w-75'
      placeholder="Tapez le début d'un nom"
      value={ value }
      style={ {
        fontSize: '1.2rem',
        fontFamily: 'Roboto, sans-serif'
      } }
      onChange={ e =>
        
        window.__STORE__
          .dispatch({
            type: SEARCH_VALUE_CHANGE,
            value: e.target.value
          }) }
      onKeyPress={ e => 

        e.key === 'Enter'
          && loadSearchResults() } />
)