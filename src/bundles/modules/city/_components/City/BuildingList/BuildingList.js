import React from 'react'
import trighbsData from '../_data/trighbs/trighbs.data'
import buildingsData from './buildings/_data'
import buildingComponents from './buildings/_components/index'

export default ({
  buildings
}) => {

  const trighbsIndex = Object
    .keys(trighbsData)

  return (
    <React.Fragment>
      {
        Object
          .entries(buildings
            // to order by trighb
            .reduce(
              (
                acc,
                building
              ) => {

                const trighb = building
                  .id
                  .split('-')[0]

                if (!acc[trighb]) {

                  acc[trighb] = [
                    building
                  ]
                  
                } else {

                  acc[trighb]
                    .push(building)
                }

                return acc
              },
              {}
            )
          )
          // Object entries
          .sort((
            a,
            b
          ) =>
          
            trighbsIndex[b[0]]
              - trighbsIndex[a[0]])

          .map(([
            trighb,
            buildings
          ]) => (
            <div key={ trighb }
                className='col-12 col-md-6'>
              <h2 className='text-white text-uppercase m-4'>
                Tribu&nbsp;
                <b className='font-epic'>
                  { trighb }</b></h2>
              {
                buildings
                  .map(building => {

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
          ))
      }
    </React.Fragment>
  )
}