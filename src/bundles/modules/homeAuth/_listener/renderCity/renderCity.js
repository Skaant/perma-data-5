import React from 'react'
import City from '../../_components/City/City';

export default () => {

  const {
    pseudo,
    buildings
  } = window.__STORE__
    .getState()
    .auth
    .user
  
  window.ReactDOM
    .render(
      <City pseudo={ pseudo }
          buildings={ buildings }/>,
      document.getElementById('city__anchor'))
}