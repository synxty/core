import { aliases, colors } from '@synxty/design-tokens';
import { TESTING } from 'constants/index.ts';
import { ButtonControl } from 'types/index.ts';

const { black } = colors;
const { primary, secondary, amber } = aliases;

export const buttonControl: ButtonControl = {
  "button.background": primary.DEFAULT,
  "button.foreground": black.tint[30],
  "button.border": black.DEFAULT,
  "button.separator": black.tint[20],
  "button.hoverBackground": amber.DEFAULT,
  "button.secondaryForeground": black.tint[30],
  "button.secondaryBackground": secondary.tint[10],
  "button.secondaryHoverBackground": amber.DEFAULT,
  "checkbox.background": black.tint[50],
  "checkbox.foreground": primary.DEFAULT,
  "checkbox.border": black.DEFAULT,
  "checkbox.selectBackground": TESTING,
  "checkbox.selectBorder": TESTING
};
