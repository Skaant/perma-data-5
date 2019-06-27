## hybrid [jQuery](https://jquery.com)/[React](https://reactjs.org/) client bundle
* [**Bootstrap**](https://getbootstrap.com/) is used to build & animate UI
* **jQuery** provides DOM targeting & update methods

   * *plus, it's required by some Bootstrap components*
* **React** provides isolated scope components, with state management & automated re-render

### app root store, observers & lifecycle
* single app root **store + observers** (*inspired from the Redux implementation*)
* **app lifecycle** API (*inspired from the React stateful component's lifecycle*)
   
   * lifecycle events can be provisioned with *transition methods*
   * *transitions* can be page-specific or common to all page
   * for updates, *transitions*' params can conditionally trigger jQuery functions and React component re-renders
* **automated** authentication & user data **provisioning**

### dynamic page modules
* **React** modules rendered **conditionaly** (*from observers*) **on specific page parts**
* major app modules :
   
   * `<LoginModal/>` and `<UserPanel/>`
   * `<DialogModal/>`
   * `<ZumCite/>`
   * feature **DOMS**