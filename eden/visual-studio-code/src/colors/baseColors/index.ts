import { aliases, colors } from '@synxty/design-tokens';
import { TESTING } from 'constants/index.ts';
import { BaseColors } from 'types/index.ts';

const { black, white } = colors;
const { primary, amber } = aliases;

export const baseColors: BaseColors = {
  focusBorder: black.tint[90],
  foreground: white.shade[10],
  disabledForeground: black.tint[90],
  'widget.border': black.DEFAULT,
  'widget.shadow': `${black.DEFAULT}40`,
  'selection.background': primary.shade[40],
  descriptionForeground: white.shade[120],
  errorForeground: TESTING,
  'icon.foreground': black.tint[120],
  'sash.hoverBorder': amber.DEFAULT,
};
