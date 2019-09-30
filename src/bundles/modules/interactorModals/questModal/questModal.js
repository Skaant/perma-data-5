import React from 'react'
import QuestModal from '../../../components/QuestModal/QuestModal';

export default {
  history: {},
  currentQuest: null,
  /**
   * Change the currently displayed quest.
   * 
   * @params quest - A quest object
   */
  openQuest:
    quest => {

      const _this = window.__STATE__.modules.questModal
      const questId = quest.id

      if (!_this.history[questId]) {
        _this.history[questId] = 0
      }

      _this.currentQuest = quest

      window.ReactDOM
        .render(
          <QuestModal { ...quest }
              currentPage={ _this.history[questId] }/>,
          document.getElementById('anchor__quest-modal')
        )

      $('#quest-modal')
        .modal('show')
    },
  /**
   * Change the currently displayed quest page.
   * 
   * @params page - An integer.
   */
  goToPage:
    page => {

      const _this = window.__STATE__.modules.questModal
      const quest = _this.currentQuest

      if (quest
          && page >= 0
          && page <= (quest.pages.length - 1)) {
            

        window.ReactDOM
          .render(
            <QuestModal { ...quest }
                currentPage={ page }/>,
            document.getElementById('anchor__quest-modal')
          )
        }
    }
}