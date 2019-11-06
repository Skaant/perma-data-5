import React from 'react'
import UserMenu from '../../_components/UserMenu/UserMenu'

export default () => {

  const { 
    auth: props
  } = window.__STORE__
    .getState()
  
  window.ReactDOM
    .render(
      <UserMenu { ...props }/>,
      document.getElementById('auth__user-menu__anchor'))
}