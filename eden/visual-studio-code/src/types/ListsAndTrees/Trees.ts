import { ParseThemeKeys } from 'types/index.ts';

const treesProps = [
  'tree.indentGuidesStroke',
  'tree.inactiveIndentGuidesStroke',
  'tree.tableColumnsBorder',
  'tree.tableOddRowsBackground',
] as const;

export type Trees = ParseThemeKeys<typeof treesProps>;
