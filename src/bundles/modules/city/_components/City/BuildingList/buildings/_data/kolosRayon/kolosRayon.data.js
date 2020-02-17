import tuto1Quest from "./_dialogs/_quests/tuto1/tuto1.quest";
import tuto2Quest from "./_dialogs/_quests/tuto2/tuto2.quest";
import seedOverFrastStory from "./_dialogs/_stories/seedOverFrast/seedOverFrast.story";
import kolosXanStory from "./_dialogs/_stories/kolosXan/kolosXan.story";

export default {
  trighb: "kolos",
  name: "nexus",
  levels: {
    '0': {
      name: "Graine intrépide",
      flavour: "A l'intérieur de cette graine, endormie : la conscience; le potentiel de remplir l'espace et de le porter plus haut.",
    },
    '100': {
      xp: 100,
      name: "Pousse",
      flavour: "Ça y est, elle a germé la flamme qui maintiendra unies toutes les âmes de la CITÉ. "
    }
  },
  quests: {
    tuto1Quest,
    tuto2Quest
  },
  stories: {
    seedOverFrastStory,
    kolosXanStory
  }
}