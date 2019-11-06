import searchListener from './_listener/search.listener'
import renderComponent from './_actions/renderComponent/renderComponent'

export default 
  () => {

    searchListener()

    renderComponent()
  }