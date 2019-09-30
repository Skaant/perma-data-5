import interactorModals from '../../../modules/interactorModals/interactorModals'
import metaCity from '../../../modules/metaCity/metaCity'

window.__STATE__
  .modules.auth =
    () => {

      window.__STATE__
        .modules.metaCity = metaCity
      
      metaCity.update()
    }

interactorModals()

