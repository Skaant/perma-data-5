import React from 'react'
import ListDisplay from './ListDisplay/ListDisplay';
import trighbsData from '../../../../_data/trighbs/trighbs.data.js'

export default building => {

  const {
    id,
    name,
    xp,
    dialogs,
    trighb,
    levels
  } = building

  const trighbData = trighbsData[trighb]

  const levelCapIndex = Object
    .keys(levels)

    .findIndex(levelAmount =>
      
      xp < parseInt(levelAmount))

  const level = Object
    .values(levels)[levelCapIndex - 1]
  
  return (
    <div>
      <div className='card'>
        <div className='card-body p-0 container'>
          <div className='row'>
            <div className='col-12 col-md-6 pr-0'>
              <img className='card-img-top'
                  src={ `public/images/buildings/${ id }.jpg` }/>
            </div>
            <div className='col-12 col-md-6'>
              <h5 className='small text-uppercase text-muted mr-2 mt-2 mb-0'>
                { trighb }{
                  (level
                    || level.name)
                    && ('-'
                      + name) }
                <span className='float-right'>
                  NIVEAU { levelCapIndex }</span>
              </h5>
              <h4 className='card-title text-uppercase font-weight-light text-left pt-4 pb-3 px-4 mb-0'>
                  { level
                    && level.name
                    || name } NIV. { levelCapIndex - 1 }
                </h4>
              <ul className='list-group'>
                <ListDisplay list={ dialogs }
                    trighb={ trighbData }
                    title={ (
                      <React.Fragment>
                        <span className='mr-2 font-weight-bolder'
                            style={ {
                              color: '#'
                                + trighb.color
                            } }>
                          { trighbData.name }</span>
                        { name }
                      </React.Fragment>
                    ) }/>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}