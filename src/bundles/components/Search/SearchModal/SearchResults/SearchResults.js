import React from 'react'

export default ({ searchResults }) => {
  
  const getLinkLabel = (id, names) => ({
    mainLabel: names[0] || id,
    altsLabel: (names[0] && names.length > 1) ?
      (', ' + names.slice(1).join(', ')
        + ', ') : false
  })
  
  return (
    <div className='container mt-3'>
      {
        searchResults.map(({ id, names }) => {
          const { mainLabel, altsLabel } = getLinkLabel(id, names)

          return (
            <div key={ id }
                className='row'>
              <div className='col alert amber lighten-4 mb-2'>
                <a href={ '/plant/' + id }
                    className='text-dark'>
                  <b>{ mainLabel }</b>
                  { altsLabel }
                  {
                    names[0] && (
                      <i> ({ id })</i>
                    )

                  }
                </a>
              </div>
            </div>
          )
        })
      }
    </div>
  )
}