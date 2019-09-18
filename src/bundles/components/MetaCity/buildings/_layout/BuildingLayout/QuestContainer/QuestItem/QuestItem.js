import React from 'react'

export default
  quest => (
    <div className='row'
        onClick={ () => {
          window.__STATE__
            .modules.questModal
              .update(quest)
        }}>
      <div className='col-3'>
        !</div>
      <p className='col-9'>
        { quest.content }</p>
    </div>
  )