import { ParseThemeColors } from 'types/index.ts';

const keyboardShortcutTableColorsProps = [
  'keybindingTable.headerBackground',
  'keybindingTable.rowsBackground',
] as const;

export type KeyboardShortcutTableColors = ParseThemeColors<typeof keyboardShortcutTableColorsProps>;
