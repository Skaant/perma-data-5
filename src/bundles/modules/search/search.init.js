import React from 'react'
import searchListener from "./_listener/search.listener";
import Search from '../../components/Search/Search';

export default 
  () => {

    const updateComponent =
      value => 
          
        window.ReactDOM
          .render(
            <Search
                value={ value }/>,
            $('#search-input__form')[0])

    searchListener(updateComponent)

    updateComponent('')
  }