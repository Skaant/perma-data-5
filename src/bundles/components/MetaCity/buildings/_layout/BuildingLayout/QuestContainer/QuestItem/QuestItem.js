import React from 'react'

export default
  quest => (
    <div className='row pt-3 px-3'
        onClick={ () => {
          window.__STATE__
            .modules.questModal
              .openQuest(quest)
        }}>
      <div className='col-12 alert alert-info mb-0'
          style={ { cursor: 'pointer' } }>
        <span className='far fa-question-circle float-left mt-1'
          title='Quête en cours'></span>
        &nbsp;
        <span className='font-weight-light'>
          { quest.title }</span>
      </div>
    </div>
  )