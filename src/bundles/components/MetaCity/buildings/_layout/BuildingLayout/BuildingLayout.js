import React from 'react'

export default ({
  id,
  name,
  summary,
  children
}) => (
  <div key={ id }
      className='card col-12 col-sm-6 col-lg-4 px-0'>
    <div className='card-body bg-white rounded-lg p-0 pb-3'>
      <h4 className='card-title font-weight-lighter p-4 mb-0'>
        { name }</h4>
      <p className='font-weight-light bg-light p-4'>
        { summary }</p>
      { children }
    </div>
  </div>
)