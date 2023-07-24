import { ParseThemeKeys } from 'types/index.ts';

const overviewRulerProps = [
  'editorOverviewRuler.background',
  'editorOverviewRuler.border',
  'editorOverviewRuler.findMatchForeground',
  'editorOverviewRuler.rangeHighlightForeground',
  'editorOverviewRuler.selectionHighlightForeground',
  'editorOverviewRuler.wordHighlightForeground',
  'editorOverviewRuler.wordHighlightStrongForeground',
  'editorOverviewRuler.wordHighlightTextForeground',
  'editorOverviewRuler.modifiedForeground',
  'editorOverviewRuler.addedForeground',
  'editorOverviewRuler.deletedForeground',
  'editorOverviewRuler.errorForeground',
  'editorOverviewRuler.warningForeground',
  'editorOverviewRuler.infoForeground',
  'editorOverviewRuler.bracketMatchForeground',
] as const;

export type OverviewRuler = ParseThemeKeys<typeof overviewRulerProps>;
