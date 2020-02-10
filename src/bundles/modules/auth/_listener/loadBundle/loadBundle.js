import { AUTH_LOAD_BUNDLE_START, AUTH_LOAD_BUNDLE_ERROR } from "../../_actions/auth.actions";
import { MAIN_NOTIFICATIONS_NEW, MAIN_NOTIFICATIONS_REPLACE } from "../../../main/_actions/main.actions";
import userAuthNoBundleNotificationFactory from "./_notifications/userAuthNoBundle/userAuthNoBundle.notificationFactory";
import authBundleSuccessNotificationFactory from "./_notifications/authBundleSuccess/authBundleSuccess.notificationFactory";

export default pageId =>

  setTimeout(
    () => {
      
      const store = window.__STORE__
    
      store
        .dispatch({
          type: AUTH_LOAD_BUNDLE_START
        })

      const userAuthNoBundleNotification = userAuthNoBundleNotificationFactory()
      const userAuthNoBundleNotificationTimestamp = Date.now()

      store
        .dispatch({
          type: MAIN_NOTIFICATIONS_NEW,
          notifications: [ userAuthNoBundleNotification ]
        })
    
      $.getScript(`/public/bundles/pages/${ pageId }/auth.js`)
 
        /**
         * When received, the `_auth` script also dispatch
         *  a `INITALIZER_BUNDLE_REGISTERED` action.
         */
        .then(() => {

            const {
              auth
            } = window.__STORE__
              .getState()

            const authBundleSuccessNotification = authBundleSuccessNotificationFactory(auth.user)
            
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