import main from '../../../../../modules/main'
import search from '../../../../../modules/search'
import auth from '../../../../../modules/auth';

export default {
  id: 'home-base',
  modules: [
    /** Le module `main` */
    main,
    /** Le module `search` */
    search,
    /** Le module `auth` */
    auth
  ]
}