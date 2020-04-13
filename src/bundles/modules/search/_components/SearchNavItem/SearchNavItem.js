import React from 'react'
import loadSearchResults from '../_utils/loadSearchResults/loadSearchResults'
import { SEARCH_VALUE_CHANGE } from '../../_actions/search.actions';

export default ({
  value
}) => (
  <React.Fragment>
      
    <input id='search-input'
        type='text'
        className='d-none d-md-inline'
        placeholder='Recherche de plantes'
        value={ value }
        onChange={ e =>
          
          window.__STORE__
            .dispatch({
              type: SEARCH_VALUE_CHANGE,
              value: e.target.value
            }) }
        onKeyPress={ e => 

          e.key === 'Enter'
            && loadSearchResults() } />

    <span className='fas fa-search fa-lg text-green'
        onClick={ e =>
        
          loadSearchResults() }>
    </span>

  </React.Fragment>
)