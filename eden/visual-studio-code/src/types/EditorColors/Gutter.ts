import { ParseThemeColors } from 'types/index.ts';

const gutterProps = [
  'editorGutter.background',
  'editorGutter.modifiedBackground',
  'editorGutter.addedBackground',
  'editorGutter.deletedBackground',
  'editorGutter.commentRangeForeground',
  'editorGutter.commentGlyphForeground',
  'editorGutter.commentUnresolvedGlyphForeground',
  'editorGutter.foldingControlForeground',
] as const;

export type Gutter = ParseThemeColors<typeof gutterProps>;
