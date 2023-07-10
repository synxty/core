import { ParseThemeColors } from 'types/index.ts';

const peekViewColorsProps = [
  'peekView.border',
  'peekViewEditor.background',
  'peekViewEditorGutter.background',
  'peekViewEditor.matchHighlightBackground',
  'peekViewEditor.matchHighlightBorder',
  'peekViewResult.background',
  'peekViewResult.fileForeground',
  'peekViewResult.lineForeground',
  'peekViewResult.matchHighlightBackground',
  'peekViewResult.selectionBackground',
  'peekViewResult.selectionForeground',
  'peekViewTitle.background',
  'peekViewTitleDescription.foreground',
  'peekViewTitleLabel.foreground',
  'peekViewEditorStickyScroll.background',
] as const;

export type PeekViewColors = ParseThemeColors<typeof peekViewColorsProps>;
