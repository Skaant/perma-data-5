import React from 'react'
import City from '../../_components/City/City';

export default ({
  pseudo,
  buildings
}) =>
  
  window.ReactDOM
    .render(
      <City pseudo={ pseudo }
          buildings={ buildings }/>,
      document.getElementById('home-auth'))