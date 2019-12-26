import React from 'react'
import AuthNavItem from '../../_components/AuthNavItem/AuthNavItem'

export default () => {

  const { 
    auth: props
  } = window.__STORE__
    .getState()
  
  window.ReactDOM
    .render(
      <AuthNavItem { ...props }/>,
      document
        .getElementById('auth-nav-item'))
}