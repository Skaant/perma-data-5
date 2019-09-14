import React from 'react'
import MetaCity from "../../../components/MetaCity/MetaCity"

window.__STATE__
  .modules.auth =
    () =>
      window.ReactDOM
        .render(
          <MetaCity { ...window.__STATE__.data } />,
          $('#app__anchor')[0]
        )