import { ParseThemeKeys } from 'types/index.ts';

const generalProps = [
  'editor.background',
  'editor.foreground',
  'editorLineNumber.foreground',
  'editorLineNumber.activeForeground',
  'editorLineNumber.dimmedForeground',
  'editorCursor.background',
  'editorCursor.foreground',
  'editor.selectionBackground',
  'editor.selectionForeground',
  'editor.inactiveSelectionBackground',
  'editor.selectionHighlightBackground',
  'editor.selectionHighlightBorder',
  'editor.wordHighlightBackground',
  'editor.wordHighlightBorder',
  'editor.wordHighlightStrongBackground',
  'editor.wordHighlightStrongBorder',
  'editor.wordHighlightTextBackground',
  'editor.wordHighlightTextBorder',
  'editor.findMatchBackground',
  'editor.findMatchHighlightBackground',
  'editor.findRangeHighlightBackground',
  'editor.findMatchBorder',
  'editor.findMatchHighlightBorder',
  'editor.findRangeHighlightBorder',
  'search.resultsInfoForeground',
  'searchEditor.findMatchBackground',
  'searchEditor.findMatchBorder',
  'searchEditor.textInputBorder',
  'editor.hoverHighlightBackground',
  'editor.lineHighlightBackground',
  'editor.lineHighlightBorder',
  'editorUnicodeHighlight.border',
  'editorUnicodeHighlight.background',
  'editorLink.activeForeground',
  'editor.rangeHighlightBackground',
  'editor.rangeHighlightBorder',
  'editor.symbolHighlightBackground',
  'editor.symbolHighlightBorder',
  'editorWhitespace.foreground',
  'editorIndentGuide.background',
  'editorIndentGuide.activeBackground',
  'editorInlayHint.background',
  'editorInlayHint.foreground',
  'editorInlayHint.typeForeground',
  'editorInlayHint.typeBackground',
  'editorInlayHint.parameterForeground',
  'editorInlayHint.parameterBackground',
  'editorRuler.foreground',
  'editor.linkedEditingBackground',
  'editor.foldBackground',
  'editorError.foreground',
  'editorError.border',
  'editorError.background',
  'editorWarning.foreground',
  'editorWarning.border',
  'editorWarning.background',
  'editorInfo.foreground',
  'editorInfo.border',
  'editorInfo.background',
  'editorHint.foreground',
  'editorHint.border',
  'problemsErrorIcon.foreground',
  'problemsWarningIcon.foreground',
  'problemsInfoIcon.foreground',
  'editorUnnecessaryCode.border',
  'editorUnnecessaryCode.opacity',
] as const;

export type General = ParseThemeKeys<typeof generalProps>;
