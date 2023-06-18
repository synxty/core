import { aliases, colors } from '@synxty/design-tokens';
import { DEBUGGING, TESTING } from '../../constants';
import { ActionColors } from '../../types';

const { black } = colors;
const { primary, secondary, amber } = aliases;

export const actionColors: ActionColors = {
  "toolbar.hoverBackground": black.tint[70],
  //"toolbar.hoverOutline": TESTING
  "toolbar.activeBackground": black.DEFAULT
};
