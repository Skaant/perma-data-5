import React,{ 
  useState
} from 'react'
import SearchInput from './SearchInput/SearchInput';
import SearchModal from './SearchModal/SearchModal';
import { SEARCH_VALUE_CHANGE } from '../../modules/search/_actions/search.actions';

export default ({ value }) => {
  
    const [loadStatus, setLoadStatus] = useState(false)
    const [searchResults, setSearchResults] = useState([])

    const handleValueChange = 
      value =>
        
        window.__STORE__
          .dispatch({
            type: SEARCH_VALUE_CHANGE,
            value
          })
    
    const loadSearchResults = () => {
      setLoadStatus(true)
      $.getJSON('/plant/search/' + searchValue)
        .then(results => {
          setSearchResults(results)
          setLoadStatus(false)
        })
        .catch(err => {
          setLoadStatus(false)
          throw err
        })
    }

    const modal = $('#search-modal')

    return (
      <React.Fragment>
        <SearchInput
            value={ value }
            handleValueChange={ handleValueChange }
            loadSearchResults={ loadSearchResults }
            openModal={ () =>
              modal.modal('show') }/>
        <SearchModal
            value={ value }
            handleValueChange={ handleValueChange }
            loadStatus={ loadStatus }
            searchResults={ searchResults }
            loadSearchResults={ loadSearchResults }
            closeModal={ () =>
              modal.modal('hide') }/>
      </React.Fragment>
    )
  }