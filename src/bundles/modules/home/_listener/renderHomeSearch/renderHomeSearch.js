import React from 'react'
import HomeSearch from '../../_components/HomeSearch/HomeSearch'

export default () => {

  const { 
    search
  } = window.__STORE__
    .getState()
  
  window.ReactDOM
    .render(
      <HomeSearch { ...search }/>,
      $('#home-search_anchor')[0])
}