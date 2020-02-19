import React from 'react'

export default ({ searchResults }) => {
  
  const getLinkLabel = (id, names) => ({
    mainLabel: names[0] || id,
    altsLabel: (names[0] && names.length > 1) ?
      (', ' + names.slice(1).join(', ')
        + ', ') : false
  })
  
  return (
    <div className='container my-3'>
      {
        searchResults.map(({ id, names }) => {
          const { mainLabel, altsLabel } = getLinkLabel(id, names)

          return (
            <div key={ id }
                className='row'
                onClick={ () => window.location.href = '/plant/' + id }>
              <a className='col-12 card my-2 text-dark px-4 py-3'
                  href={ '/plant/' + id }>
                <div>
                  {
                    names[0] && (
                      <span className='d-block float-right text-dark mr-2 font-weight-lighter'>
                        { id }</span>
                    )

                  }
                  <p className='mt-3 ml-2 mb-0'
                    style={ {
                      fontSize: '1.2rem'
                    } }>
                    <b className='font-weight-light'
                      style={ {
                        textDecoration: 'underline'
                      } }>
                      { mainLabel }</b>
                    <span className='font-weight-lighter'>
                      { altsLabel }</span>
                  </p>
                </div>
              </a>
            </div>
          )
        })
      }
    </div>
  )
}