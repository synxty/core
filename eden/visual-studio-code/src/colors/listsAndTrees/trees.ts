import { colors, aliases } from '@synxty/design-tokens';
import { TESTING } from 'constants/index.ts';
import { Trees } from 'types/index.ts';

const { primary, amber, danger, warning } = aliases;
const { black, white } = colors;

export const trees: Trees = {
  'tree.indentGuidesStroke': primary.DEFAULT,
  'tree.inactiveIndentGuidesStroke': black.tint[70],
  'tree.tableColumnsBorder': black.tint[20],
  'tree.tableOddRowsBackground': black.tint[30],
};
