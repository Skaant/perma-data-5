

export default
  (action, props, callback) =>
    $.ajax(
      '/data/quest',
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

        $('#quest-modal')
          .modal('hide')
      })