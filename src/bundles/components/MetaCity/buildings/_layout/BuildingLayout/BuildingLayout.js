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
            className='col-12 col-sm-6 col-xl-4'>
        <div className='card px-0 mb-4'>
          <div className='card-body bg-white rounded-lg p-0'>
            <h4 className='card-title font-weight-lighter p-4 mb-0 text-uppercase'>
              { name }</h4>
            <p className='font-weight-light bg-light p-4 mb-0'>
              { summary }</p>
            { children }
            {
              quests && (
                <QuestContainer quests={ quests }
                    building={ data }/>
              )
            }
            { menu }
          </div>
        </div>
      </div>
    )
  }