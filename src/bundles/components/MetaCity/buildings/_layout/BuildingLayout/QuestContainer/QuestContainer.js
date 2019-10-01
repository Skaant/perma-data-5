import React from 'react'
import QuestItem from './QuestItem/QuestItem';

export default
  ({ quests, data }) => (
    <div className='container border-bottom pb-3'>
      {
        quests
          .filter(
            quest =>
              !quest.conditions
                || eval(quest.conditions))
          .map(
            quest => (
              <QuestItem key={ quest.id }
                { ...quest }/>
            ))
      }
    </div>
  )