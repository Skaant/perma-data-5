import React from 'react'

export default ({ user }) => {
  
  if (!user) {

    return (
      <span className="fas fa-user"></span>
    )
  }
  
  return (
    <React.Fragment>
      <span className='fas fa-user-check'></span>
      <div id='todo--auth__user-modal__component'></div>
    </React.Fragment>
  )
}