import React from 'react'

export default ({
  user,
  tokenInitialCheck
}) => {
  
  return (
    <React.Fragment>
      {
        !user
          && tokenInitialCheck
          && (
            <span className='spinner-grow text-white nav-link'
                role='status'></span>
          )
      }
      {
        user
          && (
            <span className="fas fa-user-check"></span>
          )
      }
      <div id='todo--auth__user-modal__component'></div>
    </React.Fragment>
  )
}