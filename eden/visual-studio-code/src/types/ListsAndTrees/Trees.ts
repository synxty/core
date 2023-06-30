import { ParseThemeColors } from 'types/index.ts';

const treesProps = [
  'tree.indentGuidesStroke',
  'tree.inactiveIndentGuidesStroke',
  'tree.tableColumnsBorder',
  'tree.tableOddRowsBackground',
] as const;

export type Trees = ParseThemeColors<typeof treesProps>;
