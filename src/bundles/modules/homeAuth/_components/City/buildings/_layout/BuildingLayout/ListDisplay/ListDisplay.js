import React from 'react'

export default ({ list }) => (
  <ul className='list-group mt-2'>
    {
      list
        .map(item => (
          <button key={ item.key }
              className='list-group-item border-0'>
            { item.title }
          </button>
        ))
    }
  </ul>
)