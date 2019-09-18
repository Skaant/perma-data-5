import React from 'react'
import QuestItem from './QuestItem/QuestItem';

export default
  ({ quests }) => (
    <div className='container'>
      {
        quests
          .map(
            quest => (
              <QuestItem key={ quest.id }
                { ...quest }/>
            ))
      }
    </div>
  )