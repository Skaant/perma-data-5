import ReactDOM from 'react-dom'
import React from 'react'
import Search from '../../components/Search/Search'

/**
 * Initializes the search module
 */
export default () => {    

  ReactDOM
    .render(
      <Search
          initialValue={
            $('#search-input')
              .val()
          }/>,
      $('#search-input__form')[0]
    )
}