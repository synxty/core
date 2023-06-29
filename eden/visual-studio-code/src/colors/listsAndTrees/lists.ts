import { colors, aliases } from '@synxty/design-tokens';
import { DEBUGGING, TESTING } from 'constants/index.ts';
import { Lists } from 'types/index.ts';

const { primary, amber, danger, warning } = aliases;
const { black, white } = colors;

export const lists: Lists = {
  'list.activeSelectionBackground': black.tint[20],
  'list.activeSelectionForeground': white.shade[10],
  'list.activeSelectionIconForeground': primary.DEFAULT,
  'list.dropBackground': `${black.tint[40]}`,
  'list.focusBackground': black.tint[20],
  'list.focusForeground': white.shade[10],
  'list.focusHighlightForeground': TESTING,
  'list.focusOutline': primary.DEFAULT,
  'list.focusAndSelectionOutline': amber.DEFAULT,
  'list.highlightForeground': primary.DEFAULT,
  'list.hoverBackground': black.tint[20],
  'list.hoverForeground': white.shade[10],
  'list.inactiveSelectionBackground': black.tint[20],
  'list.inactiveSelectionForeground': white.shade[10],
  'list.inactiveSelectionIconForeground': primary.DEFAULT,
  'list.inactiveFocusBackground': TESTING,
  //'list.inactiveFocusOutline': TESTING,
  'list.invalidItemForeground': TESTING,
  'list.errorForeground': danger.DEFAULT,
  'list.warningForeground': warning.DEFAULT,
  'listFilterWidget.background': TESTING,
  'listFilterWidget.outline': TESTING,
  'listFilterWidget.noMatchesOutline': TESTING,
  'listFilterWidget.shadow': TESTING,
  'list.filterMatchBackground': TESTING,
  'list.filterMatchBorder': TESTING,
  'list.deemphasizedForeground': TESTING,
};
