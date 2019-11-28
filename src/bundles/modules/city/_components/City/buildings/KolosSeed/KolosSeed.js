import React from 'react'
import BuildingLayout from '../_layout/BuildingLayout/BuildingLayout'
import _quests from '../_data/quests'
import _helps from '../_data/helps'

export default ({
  id,
  quests,
  ...props
}) => (
  <BuildingLayout id={ id }
    list={ [
      ...(
        quests[
          'kolos-seed-intro']
            .new 
              === true
                ? [{
                  key: 'kolos-seed-intro-quest-new',
                  id: 'kolos-seed-intro-quest-new',
                  type: 'quest',
                  new: true,
                  title: _quests[
                    'kolos-seed-intro']
                      .title,
                  click: {
                    open: 'quest',
                    key: 'kolos-seed-intro'
                  }
                }]
                : []
      ),
      {
        key: 'kolos-seed-intro-help',
        id: 'kolos-seed-intro-help',
        type: 'help',
        new: props
          .read,
        title: _helps[
          'kolos-seed-intro']
            .title,
        click: {
          open: 'help',
          key: 'kolos-seed-intro'
        }
      },
      ...(
        quests[
          'kolos-seed-intro']
            .new 
              === false
                ? [{
                  key: 'kolos-seed-intro-quest',
                  id: 'kolos-seed-intro-quest',
                  type: 'quest',
                  new: false,
                  title: _quests[
                    'kolos-seed-intro']
                      .title,
                  click: {
                    open: 'quest',
                    key: 'kolos-seed-intro'
                  }
                }]
                : []
      )
    ] }/>
)