import React from 'react'
import DialogsList from './DialogsList/DialogsList';
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
      <div className='card mb-5'>
        <div className='card-body p-0 container'>
          <div className='row'>
            <div className='col-12 col-md-6'>
              <img className='card-img-top'
                  src={ `public/images/buildings/${ id }.jpg` }/>
            </div>
            <div className='col-12 col-md-6'>
              <span className='small float-right text-muted font-weight-light h6 mt-1 mr-2'>
                NIVEAU { levelCapIndex }</span>
              <h4 className='card-title text-uppercase font-weight-light text-left pt-4 pb-3 px-4 mb-0'>
                { level
                  && level.name
                  || name }
                </h4>
              <ul className='list-group'>
                <DialogsList list={ dialogs }
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