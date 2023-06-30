import { colors, aliases } from '@synxty/design-tokens';
import { Trees } from 'types/index.ts';

const { primary } = aliases;
const { black } = colors;

export const trees: Trees = {
  'tree.indentGuidesStroke': primary.DEFAULT,
  'tree.inactiveIndentGuidesStroke': black.tint[70],
  'tree.tableColumnsBorder': black.tint[20],
  'tree.tableOddRowsBackground': black.tint[30],
};
