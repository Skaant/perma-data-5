import React from 'react'

export default ({ list }) => (
  <ul className='list-group p-2'>
    {
      list
        .map(item => (
          <button key={ item.key }
              className={ `list-group-item font-weight-light text-left ${
                item.new
                  ? 'alert-danger'
                  : ''
              }` }>
            { item.title }
          </button>
        ))
    }
  </ul>
)