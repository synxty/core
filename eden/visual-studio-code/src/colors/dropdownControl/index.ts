import { aliases, colors } from '@synxty/design-tokens';
import { DEBUGGING, TESTING } from '../../constants';
import { DropdownControl } from '../../types';

const { black, white } = colors;
const { primary, secondary, amber } = aliases;

export const dropdownControl: DropdownControl = {
  "dropdown.background": black.tint[50],
  "dropdown.border": black.DEFAULT,
  "dropdown.listBackground": black.tint[30],
  "dropdown.foreground": white.shade[10]
};
