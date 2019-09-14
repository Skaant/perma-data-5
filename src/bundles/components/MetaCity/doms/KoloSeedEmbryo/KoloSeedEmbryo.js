import React from 'react'

export default ({
  zums
}) => (
  <div className='container'>
    <div className='row justify-content-end mb-0 px-2 small'>
      <p className='col-4 text-uppercase'>
        { zums }
        &nbsp;
        <span className='fas fa-users'></span>
        &nbsp;
        zums
      </p>
    </div>
    <div className='row'>
      <div className='col-12'>
        <h6>Quête</h6>
        <p>Oki oki</p>
      </div>
    </div>
  </div>
)