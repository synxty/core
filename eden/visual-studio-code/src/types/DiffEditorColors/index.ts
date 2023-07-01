import { ParseThemeColors } from 'types/index.ts';

const diffEditorColorsProps = [
  'diffEditor.insertedTextBackground',
  'diffEditor.insertedTextBorder',
  'diffEditor.removedTextBackground',
  'diffEditor.removedTextBorder',
  'diffEditor.border',
  'diffEditor.diagonalFill',
  'diffEditor.insertedLineBackground',
  'diffEditor.removedLineBackground',
  'diffEditorGutter.insertedLineBackground',
  'diffEditorGutter.removedLineBackground',
  'diffEditorOverview.insertedForeground',
  'diffEditorOverview.removedForeground',
  'diffEditor.unchangedRegionBackground',
] as const;

export type DiffEditorColors = ParseThemeColors<typeof diffEditorColorsProps>;
