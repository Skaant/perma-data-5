import React from 'react'
import trighbsData from '../_data/trighbs.data.json'
import buildingsData from './buildings/_data'

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
              <h2 className='text-white text-epic text-uppercase'>
                { trighb }</h2>
              {
                buildings
                  .map(_building => {

                    const building = {
                      ..._building,
                      ...buildingsData[_building.id]
                    }
                    
                    return building
                      .name
                  })
                  .join(', ')
              }
            </div>
          ))
      }
    </React.Fragment>
  )
}