import React from 'react'

export default ({ title, content }) => (
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
          { content }
        </div>
      </div>
    </div>
  </div>
)