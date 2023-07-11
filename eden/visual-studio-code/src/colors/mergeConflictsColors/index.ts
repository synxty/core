import { aliases, colors } from '@synxty/design-tokens';
import { TESTING } from 'constants/index.ts';
import { MergeConflictsColors } from 'types/index.ts';

const { black } = colors;
const { primary, teal, violet, success, warning } = aliases;

export const mergeConflictsColors: MergeConflictsColors = {
  'merge.currentHeaderBackground': teal.shade[10],
  'merge.currentContentBackground': teal.shade[50],
  'merge.incomingHeaderBackground': violet.DEFAULT,
  'merge.incomingContentBackground': violet.shade[50],
  //'merge.border': TESTING,
  'merge.commonContentBackground': TESTING,
  'merge.commonHeaderBackground': TESTING,
  'editorOverviewRuler.currentContentForeground': teal.DEFAULT,
  'editorOverviewRuler.incomingContentForeground': violet.DEFAULT,
  'editorOverviewRuler.commonContentForeground': TESTING,
  'editorOverviewRuler.commentForeground': TESTING,
  'editorOverviewRuler.commentUnresolvedForeground': TESTING,
  'mergeEditor.change.background': black.tint[30],
  'mergeEditor.change.word.background': black.tint[30],
  'mergeEditor.conflict.unhandledUnfocused.border': warning.DEFAULT,
  'mergeEditor.conflict.unhandledFocused.border': primary.DEFAULT,
  'mergeEditor.conflict.handledUnfocused.border': success.DEFAULT,
  'mergeEditor.conflict.handledFocused.border': primary.DEFAULT,
  'mergeEditor.conflict.unhandled.minimapOverViewRuler': warning.DEFAULT,
  'mergeEditor.conflict.handled.minimapOverViewRuler': success.DEFAULT,
  'mergeEditor.conflictingLines.background': TESTING,
  'mergeEditor.changeBase.background': TESTING,
  'mergeEditor.changeBase.word.background': TESTING,
  'mergeEditor.conflict.input1.background': TESTING,
  'mergeEditor.conflict.input2.background': TESTING,
};
