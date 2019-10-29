import React from 'react'
import QuestItem from './QuestItem/QuestItem';

export default
  ({ building, quests }) => {

    const activeQuests = quests
      .filter(
        quest =>
          !quest.conditions
            || eval(quest.conditions))
            
    return activeQuests.length > 0 ?
      (
        <div className='container border-bottom pb-3'>
          {
            activeQuests
              .map(
                quest => (
                  <QuestItem key={ quest.id }
                      building={ building }
                      quest={ quest }/>
                ))
          }
        </div>
      ) : (
        <span></span>
      )
  }