import React, { useState } from 'react'

export default 
  ({ id, title, pages }) => {

    const _this = window.__STATE__.modules.questModal

    const page = pages[_this.history[id]]
    
    return (
      <div id='quest-modal'
          className='modal fade'>
        <div className='modal-dialog'>
          <div className='modal-content'>
            <div className='modal-header'>
              <h5 className='modal-title'>
                { title }</h5>
              <button type='button' className='close'
                  data-dismiss='modal' aria-label='Close'>
              <span aria-hidden='true'>&times;</span></button>
            </div>
            <div className='modal-body'>
              { page.content }
            </div>
            {
              page.summary && (
                <div className='modal-body'>
                  { page.summary }
                </div>
              )
            }
            {
              !page.menu && (
                <div className='modal-footer'>
                  {
                    _this.history[id] > 0 ? (
                      <button type='button'
                          className='btn btn-default'>
                        Précédent</button>
                    ) : (
                      <span></span>
                    )
                  }
                  {
                    _this.history[id] < (pages.length - 1) ? (
                      <button type='button'
                          className='btn btn-danger'>
                        Suivant</button>
                    ) : (
                      <span></span>
                    )
                  }
                </div>
              )
            }
          </div>
        </div>
      </div>
    )
  }