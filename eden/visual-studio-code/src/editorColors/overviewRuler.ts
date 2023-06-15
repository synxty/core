import { colors, aliases } from '@synxty/design-tokens';

import { DEBUGGING, TESTING } from '../constants';
import { OverviewRuler } from '../types';

const { primary, magenta, violet, teal, amber, chartreuse, red, danger, orange, info, success, warning } = aliases;
const { black } = colors;

export const overviewRuler: OverviewRuler = {
  "editorOverviewRuler.background": black.tint[20],
  "editorOverviewRuler.border": black.tint[10],
  "editorOverviewRuler.findMatchForeground": amber.DEFAULT,
  "editorOverviewRuler.rangeHighlightForeground": TESTING,
  "editorOverviewRuler.selectionHighlightForeground": primary.DEFAULT,
  "editorOverviewRuler.wordHighlightForeground": primary.DEFAULT,
  "editorOverviewRuler.wordHighlightStrongForeground": primary.DEFAULT,
  "editorOverviewRuler.wordHighlightTextForeground": TESTING,
  "editorOverviewRuler.modifiedForeground": info.DEFAULT,
  "editorOverviewRuler.addedForeground": success.DEFAULT,
  "editorOverviewRuler.deletedForeground": danger.DEFAULT,
  "editorOverviewRuler.errorForeground": danger.DEFAULT,
  "editorOverviewRuler.warningForeground": warning.DEFAULT,
  "editorOverviewRuler.infoForeground": info.DEFAULT,
  "editorOverviewRuler.bracketMatchForeground": TESTING,
};
