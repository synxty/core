import { aliases, colors } from '@synxty/design-tokens';
import { TESTING } from 'constants/index.ts';
import { BaseColors } from 'types/index.ts';

const { black, white } = colors;
const { primary } = aliases;

export const baseColors: BaseColors = {
  focusBorder: primary.DEFAULT,
  foreground: white.shade[10],
  disabledForeground: black.tint[90],
  'widget.border': black.tint[10],
  'widget.shadow': `${black.tint[10]}40`,
  'selection.background': primary.shade[40],
  descriptionForeground: white.shade[70],
  errorForeground: TESTING,
  'icon.foreground': black.tint[120],
  'sash.hoverBorder': primary.DEFAULT,
};
