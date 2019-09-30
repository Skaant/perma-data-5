import React, { useState } from 'react'

export default 
  ({
    // Quest properties
    id, title, pages,
    // questModal modules properties
    currentPage = false
  }) => {

    const _this = window.__STATE__.modules.questModal

    const page = pages[currentPage]
    
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
            <div className='modal-body py-4'>
              { page.content }
            </div>
            {
              page.summary && (
                <div className='modal-body border-top red text-white'>
                  { page.summary }
                </div>
              )
            }
            {
              !page.menu && (
                <div className='modal-footer'>
                  {
                    currentPage > 0 ? (
                      <button type='button'
                          className='btn btn-default'
                          onClick={ 
                            () =>
                              _this.goToPage(currentPage - 1) }>
                        Précédent</button>
                    ) : (
                      <span></span>
                    )
                  }
                  {
                    currentPage < (pages.length - 1) ? (
                      <button type='button'
                          className='btn btn-danger'
                          onClick={
                            () =>
                              _this.goToPage(currentPage + 1) }>
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