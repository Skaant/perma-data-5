import React from 'react'
import { SEARCH_MODAL_CLOSE } from '../../_actions/search.actions'
import SearchModal from '../../_components/SearchModal/SearchModal'
import setBackdropClickClose from '../../../_utils/setBackdropClickClose/setBackdropClickClose'

export default (
  openModal = false
) => {

  const { 
    search
  } = window.__STORE__
    .getState()
  
  window.ReactDOM
    .render(
      <SearchModal { ...search } />,
      $('#search-modal_anchor')[0])

  if (openModal) {

    $('#search-modal')
      .modal('show')

    setBackdropClickClose(
      '#search-modal',
      SEARCH_MODAL_CLOSE
    )
  }
}