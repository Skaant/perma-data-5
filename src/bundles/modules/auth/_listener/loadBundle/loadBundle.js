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
    
          .catch(error => 
            
            window.__STORE__
              .dispatch({
                type: AUTH_LOAD_BUNDLE_ERROR,
                error
              }))
    },
    1)