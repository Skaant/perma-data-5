import React from 'react'
import QuestModal from "../../../components/QuestModal/QuestModal";

export default {
  update:
    (data, open = true) => {
      window.ReactDOM
        .render(
          <QuestModal { ...data }/>,
          document.getElementById('anchor__quest-modal')
        )

      $('#quest-modal')
        .modal('show')
    }
}