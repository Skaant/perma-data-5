import React from 'react'

export default ({
  notification,
  closeModal
}) => (
  <div id="notification-modal"
      className='modal fade right'>
    <div className='modal-dialog modal-frame modal-bottom'
        role='document'>
      <div className='modal-content'>
        <div className='modal-body py-0'>
          <div className='row'>
            <div className='col-12 col-lg-4 py-4'>
              <h5 className='modal-title h1 font-weight-lighter m-4'>
                {
                  notification.title
                    || 'Nouvelle notification !'
                }</h5>
            </div>
            <div className='col-12 col-lg-8 p-4 text-white'
              style={ {
                backgroundColor: '#7cb342'
              } }>
              <button type="button"
                  className="close"
                  onClick={ closeModal }>
                <span aria-hidden="true">&times;</span>
              </button>
              <p className='mx-4'
                  style={ {
                    fontSize: '1.4rem',
                    marginTop: '75px'
                  } }>
                { notification.content }</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
)