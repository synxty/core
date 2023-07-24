import { ParseThemeKeys } from 'types/index.ts';

const mergeConflictsColorsProps = [
  'merge.currentHeaderBackground',
  'merge.currentContentBackground',
  'merge.incomingHeaderBackground',
  'merge.incomingContentBackground',
  'merge.border',
  'merge.commonContentBackground',
  'merge.commonHeaderBackground',
  'editorOverviewRuler.currentContentForeground',
  'editorOverviewRuler.incomingContentForeground',
  'editorOverviewRuler.commonContentForeground',
  'editorOverviewRuler.commentForeground',
  'editorOverviewRuler.commentUnresolvedForeground',
  'mergeEditor.change.background',
  'mergeEditor.change.word.background',
  'mergeEditor.conflict.unhandledUnfocused.border',
  'mergeEditor.conflict.unhandledFocused.border',
  'mergeEditor.conflict.handledUnfocused.border',
  'mergeEditor.conflict.handledFocused.border',
  'mergeEditor.conflict.handled.minimapOverViewRuler',
  'mergeEditor.conflict.unhandled.minimapOverViewRuler',
  'mergeEditor.conflictingLines.background',
  'mergeEditor.changeBase.background',
  'mergeEditor.changeBase.word.background',
  'mergeEditor.conflict.input1.background',
  'mergeEditor.conflict.input2.background',
] as const;

export type MergeConflictsColors = ParseThemeKeys<typeof mergeConflictsColorsProps>;
