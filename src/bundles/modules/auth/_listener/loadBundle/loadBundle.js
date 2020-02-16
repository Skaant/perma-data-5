import { AUTH_LOAD_BUNDLE_START, AUTH_LOAD_BUNDLE_ERROR } from "../../_actions/auth.actions";

export default pageId =>

  setTimeout(
    () => {
      
      const store = window.__STORE__
    
      store
        .dispatch({
          type: AUTH_LOAD_BUNDLE_START
        })

      $.getScript(`/public/bundles/pages/${ pageId }/auth.js`)

        /**
         * When received, the `_auth` script also dispatch
         *  a `INITALIZER_BUNDLE_REGISTERED` action.
         */
        .then(() => {

          const authBundleSuccessNotification = authBundleSuccessNotificationFactory(user)
          
          const timestampDifference = Date.now() - userAuthNoBundleNotificationTimestamp

          setTimeout(
            () =>
            
              store
                .dispatch({
                  type: MAIN_NOTIFICATIONS_REPLACE,
                  id: userAuthNoBundleNotification.id,
                  notification: authBundleSuccessNotification
                }),
            timestampDifference > 1500
              ? 1
              : (1500 - timestampDifference)
          )
        })
  
        .catch(error =>
          
          window.__STORE__
            .dispatch({
              type: AUTH_LOAD_BUNDLE_ERROR,
              error
            }))
    },
    1)