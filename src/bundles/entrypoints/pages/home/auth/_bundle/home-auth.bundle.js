import city from '../../../../../modules/city'
import dialog from '../../../../../modules/dialog'

export default {
  id: 'home-auth',
  init: () => {

    const {
      auth
    } = window.__STORE__
      .getState()

    return {
      buildings: auth
        .user
        .buildings
    }
  },
  modules: [
    /** Le module `city` */
    city,
    /** Le module `dialog` */
    dialog
  ]
}