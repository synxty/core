import { aliases, colors } from '@synxty/design-tokens';
import { TESTING } from 'constants/index.ts';
import { ButtonControl } from 'types/index.ts';

const { black } = colors;
const { primary, secondary, tertiary } = aliases;

export const buttonControl: ButtonControl = {
  'button.background': primary.DEFAULT,
  'button.foreground': black.tint[30],
  'button.border': black.tint[10],
  'button.separator': black.tint[20],
  'button.hoverBackground': tertiary.DEFAULT,
  'button.secondaryForeground': black.tint[30],
  'button.secondaryBackground': secondary.DEFAULT,
  'button.secondaryHoverBackground': tertiary.DEFAULT,
  'checkbox.background': black.tint[30],
  'checkbox.foreground': primary.DEFAULT,
  'checkbox.border': black.tint[10],
  'checkbox.selectBackground': TESTING,
  'checkbox.selectBorder': TESTING,
};
