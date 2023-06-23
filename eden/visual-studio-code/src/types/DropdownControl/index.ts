import { ParseThemeColors } from 'types/index.ts';

const dropdownControlProps = [
  'dropdown.background',
  'dropdown.listBackground',
  'dropdown.border',
  'dropdown.foreground',
] as const;

export type DropdownControl = ParseThemeColors<typeof dropdownControlProps>;
