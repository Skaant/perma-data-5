import React from 'react'
import trighbsData from '../_data/trighbs.data.json'

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
                  .key
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
          ) // Object entries
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
              <h3>
                { trighb }</h3>
              {
                buildings
                  .map(building =>
                    
                    building
                      .name)
                  .join(', ')
              }
            </div>
          ))
      }
    </React.Fragment>
  )
}