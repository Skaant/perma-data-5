import React,{ 
  useState
} from 'react'
import SearchInput from './SearchInput/SearchInput';
import SearchModal from './SearchModal/SearchModal';

export default ({ initialValue }) => {

    const [searchValue, setSearchValue] = useState(initialValue)
    const [loadStatus, setLoadStatus] = useState(false)
    const [searchResults, setSearchResults] = useState([])

    const setSearchValueEvent = e =>
      setSearchValue(e.target.value)
    
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
            searchValue={ searchValue }
            setSearchValue={ setSearchValueEvent }
            loadSearchResults={ loadSearchResults }
            openModal={ () =>
              modal.modal('show') }/>
        <SearchModal
            searchValue={ searchValue }
            setSearchValue={ setSearchValueEvent }
            loadStatus={ loadStatus }
            searchResults={ searchResults }
            loadSearchResults={ loadSearchResults }
            closeModal={ () =>
              modal.modal('hide') }/>
      </React.Fragment>
    )
  }