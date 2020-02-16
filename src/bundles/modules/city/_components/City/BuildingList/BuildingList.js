import React from 'react'
import buildingsData from './buildings/_data'
import buildingComponents from './buildings/_components/index'
import orderByTrighb from './orderByTrighb/orderByTrighb'

export default ({
  buildings
}) => {

  return (
    <React.Fragment>
      {
        orderByTrighb(buildings)

          // Iterates through trighbs to [TODO :] `TrighbHub`
          .map(
            ({ trighb, buildings }) =>
            
              (
                <div key={ trighb }
                    className='col-12 col-md-6'>
                  <h2 className='text-white text-uppercase m-4'>
                    Tribu&nbsp;
                    <b className='font-epic'>
                      { trighb }</b></h2>
                  {
                    buildings.map(building => {

                      const buildingData = buildingsData[building.id]

                      const dialogs = {}
                      
                      for (
                        const typeKey
                          of [
                            'quests',
                            'stories'
                          ]
                      ) {

                        dialogs[typeKey] = {}

                        Object
                          .entries(building[typeKey]
                            || [])
                          
                          .forEach(([
                            id,
                            dialog
                          ]) =>
                            
                            dialogs[typeKey][id] = {
                              ...dialog,
                              ...buildingData[typeKey][id]
                            })
                      }
                      
                      return buildingComponents[building.id]({
                        key: building.id,
                        ...building,
                        ...buildingData,
                        ...dialogs
                      })
                    })
                  }
                </div>
              )
            )
      }
    </React.Fragment>
  )
}