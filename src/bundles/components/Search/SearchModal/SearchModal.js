import React from 'react'

export default ({
  searchValue,
  setSearchValue,
  closeModal
}) => (
  <div id="search-modal"
      className='modal fade right'>
    <div className='modal-dialog modal-side modal-top-right mr-4'
        role='document'>
      <div className='modal-content'>
        <div className='modal-header'>
          <h5 className='modal-title'>
            Recherche</h5>
          <button type="button"
              className="close"
              onClick={ closeModal }>
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div className='modal-body'>
          { searchValue }
        </div>
      </div>
    </div>
  </div>
)