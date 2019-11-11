import React from 'react'
import City from '../../_components/City';

export default () => {

  const {
    buildings
  } = window.__STORE__
    .getState()
    .auth
    .user
  
  window.ReactDOM
    .render(
      <City buildings={ buildings }/>,
      document.getElementById('city__anchor'))
}