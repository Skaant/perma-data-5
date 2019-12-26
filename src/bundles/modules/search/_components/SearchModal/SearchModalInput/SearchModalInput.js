import React from 'react'
import loadSearchResults from '../../_utils/loadSearchResults/loadSearchResults'
import { SEARCH_VALUE_CHANGE } from '../../../_actions/search.actions';

export default ({
  value
}) => (
  <input id='search-modal-input'
    type='text'
    className='form-control col-12 mb-0 pb-0 pt-2'
    placeholder="Tapez le début d'un nom"
    value={ value }
    style={ {
      fontSize: '1.2rem',
      fontFamily: 'Roboto, sans-serif'
    } }
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
)