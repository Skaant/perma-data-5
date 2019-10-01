import React from 'react'
import QuestContainer from './QuestContainer/QuestContainer';

export default
  data => {
    const {
      id,
      name,
      summary,
      children,
      quests,
      menu
    } = data

    return (
      <div key={ id }
          className='card col-12 col-sm-6 col-lg-4 px-0'>
        <div className='card-body bg-white rounded-lg p-0'>
          <h4 className='card-title font-weight-lighter p-4 mb-0'>
            { name }</h4>
          <p className='font-weight-light bg-light p-4 mb-0'>
            { summary }</p>
          { children }
          {
            quests && (
              <QuestContainer quests={ quests }
                  data={ data }/>
            )
          }
          { menu }
        </div>
      </div>
    )
  }