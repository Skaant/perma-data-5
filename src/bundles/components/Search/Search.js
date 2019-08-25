import React,{ 
  useState
} from 'react'
import SearchInput from './SearchInput/SearchInput';
import SearchModal from './SearchModal/SearchModal';

export default
  ({
    initialValue
  }) => {

    const [
      searchValue,
      setSearchValue
    ] = useState(
      initialValue
    )

    const setSearchValueEvent =
      e =>
        setSearchValue(
          e
          .target
            .value
        )

    const modal =
      $('#search-modal')

    return (
      <React.Fragment>
        <SearchInput
            searchValue={ searchValue }
            setSearchValue={ setSearchValueEvent }
            openModal={ () =>
              modal
                .modal(
                  'show'
                ) }/>
        <SearchModal
            searchValue={ searchValue }
            setSearchValue={ setSearchValueEvent }
            closeModal={
              () =>
                modal
                  .modal(
                    'hide'
                  ) }/>
      </React.Fragment>
    )
  }