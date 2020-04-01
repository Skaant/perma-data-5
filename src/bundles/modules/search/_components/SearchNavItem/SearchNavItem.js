import React from 'react'
import loadSearchResults from '../_utils/loadSearchResults/loadSearchResults'
import { SEARCH_VALUE_CHANGE } from '../../_actions/search.actions';

export default ({
  value
}) => (
  <React.Fragment>

    <div className='row'>
      
      <input id='search-input'
          type='text'
          className='form-control text-dark col mx-2 pb-0 mr-4 font-weight-light'
          placeholder='Trouvez des plantes'
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

      <div className='btn-bubble col p-0'
          onClick={ e =>
          
            loadSearchResults() }>
        <span className='fas fa-search fa-lg text-green'></span>
      </div>
    </div>

    <div id='search-modal_anchor'></div>
  </React.Fragment>
)