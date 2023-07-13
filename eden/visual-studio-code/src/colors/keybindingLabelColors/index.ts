import { colors } from '@synxty/design-tokens';
import { KeybindingLabelColors } from 'types/index.ts';

const { black, white } = colors;

export const keybindingLabelColors: KeybindingLabelColors = {
  'keybindingLabel.background': black.tint[20],
  'keybindingLabel.foreground': white.shade[10],
  'keybindingLabel.border': black.tint[10],
  'keybindingLabel.bottomBorder': black.tint[10],
};
