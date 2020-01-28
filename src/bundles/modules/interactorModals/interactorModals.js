import questModal from "./questModal/questModal";

export default
  () => {

    window.__STATE__
      .modules.questModal = questModal
  }