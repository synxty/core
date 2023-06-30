import { ParseThemeColors } from 'types/index.ts';

const listsProps = [
  'list.activeSelectionBackground',
  'list.activeSelectionForeground',
  'list.activeSelectionIconForeground',
  'list.dropBackground',
  'list.focusBackground',
  'list.focusForeground',
  'list.focusHighlightForeground',
  'list.focusOutline',
  'list.focusAndSelectionOutline',
  'list.highlightForeground',
  'list.hoverBackground',
  'list.hoverForeground',
  'list.inactiveSelectionBackground',
  'list.inactiveSelectionForeground',
  'list.inactiveSelectionIconForeground',
  'list.inactiveFocusBackground',
  'list.inactiveFocusOutline',
  'list.invalidItemForeground',
  'list.errorForeground',
  'list.warningForeground',
  'listFilterWidget.background',
  'listFilterWidget.outline',
  'listFilterWidget.noMatchesOutline',
  'listFilterWidget.shadow',
  'list.filterMatchBackground',
  'list.filterMatchBorder',
  'list.deemphasizedForeground',
] as const;

export type Lists = ParseThemeColors<typeof listsProps>;
