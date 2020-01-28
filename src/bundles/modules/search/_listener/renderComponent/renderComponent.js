import React from 'react'
import Search from '../../_components/Search/Search'

export default () => {

  const { 
    search: props
  } = window.__STORE__
    .getState()
  
  window.ReactDOM
    .render(
      <Search { ...props }/>,
      $('#search-input__form')[0])
}