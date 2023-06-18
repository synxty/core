import { aliases, colors } from '@synxty/design-tokens';
import { DEBUGGING, TESTING } from '../../constants';
import { ButtonControl } from '../../types';

const { black, white } = colors;
const { primary, secondary, amber } = aliases;

export const buttonControl: ButtonControl = {
  "button.background": primary.DEFAULT,
  "button.foreground": black.tint[20],
  "button.border": black.DEFAULT,
  "button.separator": black.tint[20],
  "button.hoverBackground": amber.DEFAULT,
  "button.secondaryForeground": TESTING,
  "button.secondaryBackground": primary.DEFAULT,
  "button.secondaryHoverBackground": amber.DEFAULT,
  "checkbox.background": black.tint[50],
  "checkbox.foreground": primary.DEFAULT,
  "checkbox.border": black.DEFAULT,
  "checkbox.selectBackground": TESTING,
  "checkbox.selectBorder": TESTING
};
