import React from 'react'
import MetaCity from '../../components/MetaCity/MetaCity'

export default {
  update:
    () => 
      window.ReactDOM
        .render(
          <MetaCity/>,
          $('#app__anchor')[0]
        )
}