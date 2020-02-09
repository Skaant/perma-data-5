import React from 'react'
import BuildingLayout from '../../_layout/BuildingLayout/BuildingLayout'

export default ({
  id,
  quests,
  stories,
  ...data
}) => (
  <BuildingLayout id={ id }
      { ...data }
      dialogs={ Object
        .values({
          ...quests,
          ...stories
        })
      } />
)