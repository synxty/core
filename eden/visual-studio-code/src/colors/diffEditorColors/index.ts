import { aliases, colors } from '@synxty/design-tokens';
import { TESTING } from 'constants/index.ts';
import { DiffEditorColors } from 'types/index.ts';

const { black } = colors;
const { success, danger } = aliases;

export const diffEditorColors: DiffEditorColors = {
  'diffEditor.insertedTextBackground': `${success.DEFAULT}`,
  //'diffEditor.insertedTextBorder': TESTING,
  'diffEditor.removedTextBackground': `${danger.DEFAULT}`,
  //'diffEditor.removedTextBorder': TESTING,
  'diffEditor.border': black.tint[10],
  'diffEditor.diagonalFill': black.tint[40],
  'diffEditor.insertedLineBackground': `${success.DEFAULT}60`,
  'diffEditor.removedLineBackground': `${danger.DEFAULT}60`,
  //'diffEditorGutter.insertedLineBackground': success.shade[90],
  //'diffEditorGutter.removedLineBackground': danger.shade[90],
  'diffEditorOverview.insertedForeground': success.DEFAULT,
  'diffEditorOverview.removedForeground': danger.DEFAULT,
  'diffEditor.unchangedRegionBackground': TESTING,
};
