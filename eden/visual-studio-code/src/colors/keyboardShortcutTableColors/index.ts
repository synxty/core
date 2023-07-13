import { colors } from '@synxty/design-tokens';
import { KeyboardShortcutTableColors } from 'types/index.ts';

const { black } = colors;

export const keyboardShortcutTableColors: KeyboardShortcutTableColors = {
  'keybindingTable.headerBackground': black.tint[30],
  'keybindingTable.rowsBackground': black.tint[10],
};
