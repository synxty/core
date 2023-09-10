import { colors } from '@synxty/design-tokens';
import { ActionColors } from 'types/index.ts';

const { black } = colors;

export const actionColors: ActionColors = {
  'toolbar.hoverBackground': black.tint[70],
  'toolbar.activeBackground': black.tint[10],
};
