import React from 'react'

export default ({
  dialogId,
  pageIndex,
  interactors
}) => (
  <div className='light-green darken-1 px-5 py-4 text-center'>
    {
      interactors
        .filter(item =>
          
          !item.display
            || item.display()
        )
        .map(item => 
            
          (
            <button key={ dialogId
                  + '#'
                  + pageIndex
                  + ':'
                  + item.label }
                type='button'
                className='btn btn-lg btn-white w-100'
                onClick={ e =>

                  item.click
                    && item.click(e) }>
              { item.label }
            </button>
          ))
    }
  </div>
)