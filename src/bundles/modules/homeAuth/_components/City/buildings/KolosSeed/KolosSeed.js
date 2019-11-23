import React from 'react'
import BuildingLayout from '../_layout/BuildingLayout/BuildingLayout'
import _quests from '../_data/quests'

export default ({
  id,
  quests
}) => (
  <BuildingLayout id={ id }
    list={ [
      ...(
        quests[
          'kolos-seed-intro']
            .new
              && [{
                key: 'kolos-seed-intro-new',
                title: _quests[
                  'kolos-seed-intro']
                    .title
              }]
      )
    ] }/>
)