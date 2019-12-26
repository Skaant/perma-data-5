import React from 'react'
import SearchNavItem from '../../_components/SearchNavItem/SearchNavItem'

export default () => {

  const { 
    search
  } = window.__STORE__
    .getState()
  
  window.ReactDOM
    .render(
      <SearchNavItem { ...search }/>,
      $('#search-nav-item')[0])
}