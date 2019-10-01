import React from 'react'

export default
  ({ building, quest }) => (
    <div className='row pt-3 px-3'
        onClick={ () => {
          window.__STATE__
            .modules.questModal
              .openQuest(quest)
        }}>
      <div className={
          'col-12 alert mb-0 alert-'
            + (quest.type === 'info' ? 'info' : '')
            + (quest.type === 'action' ? 'warning' : '') }
          style={ { cursor: 'pointer' } }>
        <p className='mb-0'>
          <span className={
              'fas float-left mt-1'
                + (quest.type === 'info' ? ' fa-info-circle' : '')
                + (quest.type === 'action' ? ' fa-question-circle' : '') }
            title='Quête en cours'></span>
          &nbsp;
          <span className='font-weight-light'>
            { quest.title }</span>
        </p>
        {
          quest.objectives && (
            <ul className='list-unstyled mt-3 mb-0 pl-4 text-left small'>
              {
                quest.objectives
                  .map((objective, index) => (
                    <li key={ quest.id + '*' + index }>
                      {
                        eval(objective.conditions) ? (
                          <span className='far fa-check-square'></span>
                        ) : (
                          <span className='far fa-square'></span>
                        )
                      }
                      &nbsp;
                      { objective.label }</li>
                  ))
              }
            </ul>
          )
        }
      </div>
    </div>
  )