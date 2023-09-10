import { aliases, colors } from '@synxty/design-tokens';
import { TESTING } from 'constants/index.ts';
import { DiffEditorColors } from 'types/index.ts';

const { black } = colors;
const { success, danger } = aliases;

export const diffEditorColors: DiffEditorColors = {
  'diffEditor.insertedTextBackground': `${success.DEFAULT}`,
  'diffEditor.removedTextBackground': `${danger.DEFAULT}`,
  'diffEditor.border': black.tint[10],
  'diffEditor.diagonalFill': black.tint[40],
  'diffEditor.insertedLineBackground': `${success.DEFAULT}60`,
  'diffEditor.removedLineBackground': `${danger.DEFAULT}60`,
  'diffEditorOverview.insertedForeground': success.DEFAULT,
  'diffEditorOverview.removedForeground': danger.DEFAULT,
  'diffEditor.unchangedRegionBackground': TESTING,
};
