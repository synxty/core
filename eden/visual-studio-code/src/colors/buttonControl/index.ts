import { aliases, colors } from '@synxty/design-tokens';
import { TESTING } from 'constants/index.ts';
import { ButtonControl } from 'types/index.ts';

const { black } = colors;
const { primary, secondary } = aliases;

export const buttonControl: ButtonControl = {
  'button.background': primary.DEFAULT,
  'button.foreground': black.tint[30],
  'button.border': black.DEFAULT,
  'button.separator': black.tint[20],
  'button.hoverBackground': secondary.DEFAULT,
  'button.secondaryForeground': black.tint[30],
  'button.secondaryBackground': secondary.DEFAULT,
  'button.secondaryHoverBackground': primary.DEFAULT,
  'checkbox.background': black.tint[50],
  'checkbox.foreground': primary.DEFAULT,
  'checkbox.border': black.DEFAULT,
  'checkbox.selectBackground': TESTING,
  'checkbox.selectBorder': TESTING,
};
