import React from 'react'
import loadSearchResults from '../../_utils/loadSearchResults/loadSearchResults'
import { SEARCH_VALUE_CHANGE } from '../../../_actions/search.actions';

export default ({
  value
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
          
            window.__STORE__
              .dispatch({
                type: SEARCH_VALUE_CHANGE,
                value: e.target.value
              }) }
        onKeyPress={
          e => 
          
            e.key === 'Enter'
              && loadSearchResults() } />
    </div>
  </div>

)