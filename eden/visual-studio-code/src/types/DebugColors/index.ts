import { ParseThemeColors } from 'types/index.ts';

const debugColorsProps = [
  'debugToolBar.background',
  'debugToolBar.border',
  'editor.stackFrameHighlightBackground',
  'editor.focusedStackFrameHighlightBackground',
  'editor.inlineValuesForeground',
  'editor.inlineValuesBackground',
  'debugView.exceptionLabelForeground',
  'debugView.exceptionLabelBackground',
  'debugView.stateLabelForeground',
  'debugView.stateLabelBackground',
  'debugView.valueChangedHighlight',
  'debugTokenExpression.name',
  'debugTokenExpression.value',
  'debugTokenExpression.string',
  'debugTokenExpression.boolean',
  'debugTokenExpression.number',
  'debugTokenExpression.error',
] as const;

export type DebugColors = ParseThemeColors<typeof debugColorsProps>;
