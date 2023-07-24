import { ParseThemeKeys } from 'types/index.ts';

const keyboardShortcutTableColorsProps = [
  'keybindingTable.headerBackground',
  'keybindingTable.rowsBackground',
] as const;

export type KeyboardShortcutTableColors = ParseThemeKeys<typeof keyboardShortcutTableColorsProps>;
