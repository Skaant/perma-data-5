import React from 'react'
import DialogsList from './DialogsList/DialogsList';
import trighbsData from '../../../../_data/trighbs/trighbs.data.js'
import getLevelFromZums from './getLevelFromZums/getLevelFromZums';
import getZumsFromLevel from './getZumsFromLevel/getZumsFromLevel';

export default building => {

  const {
    id,
    name,
    zums,
    dialogs,
    trighb,
    levels
  } = building

  const trighbData = trighbsData[trighb]

  const level = getLevelFromZums(zums)
  const levelData = levels[level]
  const currentLevelZums = getZumsFromLevel(level)
  const nextLevelZums = getZumsFromLevel(level + 1)
  
  return (
    <div>
      <div className='card mb-5'>
        <div className='card-body p-0 container'>
          <div className='row'>
            <div className='col-12 col-md-6 container'>
              <img className='card-img-top my-4'
                  src={ `public/images/buildings/${ id }.jpg` }/>
              <h4 className='card-title text-uppercase font-weight-light text-left pt-4 pb-3 px-4 mb-0'>
                { levelData
                  && levelData.name
                  || name }
              </h4>
              <div className='w-100 pt-3 px-4 pb-1 font-weight-light small'>
                <span>
                  { zums }
                  <span className='fas fa-users purple-text mx-1'></span>
                  ZUMS</span>
                <span className='float-right'>
                  NIVEAU { level }</span>
              </div>
              <div className='w-100 px-3'>
                <div className='progress'
                    style={ {
                      height: '0.2rem'
                    } }>
                  <div className="progress-bar purple lighten-2"
                      role="progressbar"
                      style={ {
                        width: Math.round((zums - currentLevelZums) / (nextLevelZums - currentLevelZums) * 100) + '%'
                      } }
                      aria-valuenow={ zums }
                      aria-valuemin={ currentLevelZums }
                      aria-valuemax={ nextLevelZums }>
                  </div>
                </div>
              </div>
              <div className='w-100 px-4 pt-1 pb-3 font-weight-light small'>
                <span className='text-muted'>
                  + { zums - currentLevelZums } / { nextLevelZums - currentLevelZums } jusqu'au prochain niveau</span>
              </div>
            </div>
            <div className='col-12 col-md-6'>
              <ul className='list-group p-2'>
                <DialogsList buildingId={ id }
                    list={ dialogs }
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