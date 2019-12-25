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
                backgroundColor: '#7cb342',
                fontSize: '1.2rem'
              } }>
              <button type="button"
                  className="close"
                  onClick={ closeModal }>
                <span aria-hidden="true">&times;</span>
              </button>
              {
                notification
                  .content.map((
                    line,
                    index
                  ) => (
                    <p key={ notification.title
                          + '_'
                          + notification.id
                          + '_'
                          + index }
                        className={ 'mx-4 mb-1'
                          + (index === 0
                            ? ' mt-4'
                            : '') }>
                      { line
                        || (
                          <span>&nbsp;</span>
                        ) }</p>
                  ))
              }
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
)