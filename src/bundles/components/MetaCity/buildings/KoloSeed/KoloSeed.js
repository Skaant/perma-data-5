import React from 'react'
import BuildingLayout from '../_layout/BuildingLayout/BuildingLayout';

export default
  data => {

    const serverAction = window.__STATE__.modules.serverAction
    
    return (
      <BuildingLayout { ...data }
          menu={
            data.state === 1 && (
              <div className='container py-3'>
                <button type='button'
                    className='btn btn-danger w-75'
                    onClick={
                      () =>
                        serverAction('kolo-seed-pop') }>
                  Éclore</button>
              </div>
            )
          }>
      </BuildingLayout>
    )
  }