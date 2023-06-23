import { colors } from '@synxty/design-tokens';
import { DropdownControl } from 'types/index.ts';

const { black, white } = colors;

export const dropdownControl: DropdownControl = {
  'dropdown.background': black.tint[50],
  'dropdown.border': black.DEFAULT,
  'dropdown.listBackground': black.tint[30],
  'dropdown.foreground': white.shade[10],
};
