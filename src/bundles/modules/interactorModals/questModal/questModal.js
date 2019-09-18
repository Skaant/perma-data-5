import React from 'react'
import QuestModal from '../../../components/QuestModal/QuestModal';

export default {
  history: {},
  update:
    (quest, open = true) => {

      const _this = window.__STATE__.modules.questModal
      const questId = quest.id

      if (!_this.history[questId]) {
        _this.history[questId] = 0
      }

      window.ReactDOM
        .render(
          <QuestModal { ...quest }/>,
          document.getElementById('anchor__quest-modal')
        )

      $('#quest-modal')
        .modal('show')
    }
}