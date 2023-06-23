import { aliases, colors } from '@synxty/design-tokens';
import { InputControl } from 'types/index.ts';

const { black, white } = colors;
const { primary, danger, info, warning } = aliases;

export const inputControl: InputControl = {
  'input.background': black.tint[50],
  'input.border': black.DEFAULT,
  'input.foreground': white.shade[10],
  'input.placeholderForeground': white.shade[120],
  'inputOption.activeBackground': black.tint[50],
  'inputOption.activeBorder': black.tint[50],
  'inputOption.activeForeground': primary.DEFAULT,
  'inputOption.hoverBackground': black.tint[30],
  'inputValidation.errorBackground': danger.DEFAULT,
  'inputValidation.errorBorder': danger.DEFAULT,
  'inputValidation.errorForeground': white.shade[10],
  'inputValidation.infoBackground': info.DEFAULT,
  'inputValidation.infoBorder': info.DEFAULT,
  'inputValidation.infoForeground': white.shade[10],
  'inputValidation.warningBackground': warning.DEFAULT,
  'inputValidation.warningBorder': warning.DEFAULT,
  'inputValidation.warningForeground': white.shade[10],
};
