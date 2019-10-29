

export default
  (action, props, options) =>
    $.ajax(
      '/api/action',
      {
        method: 'PUT',
        data: {
          action,
          props
        }
      })
      .then(result => {

        window.__STATE__
          .data.buildings = result
        
        window.__STATE__
          .modules.metaCity.update()

        if (options.hideModal) {
          $('#quest-modal')
            .modal('hide')
        }
      })