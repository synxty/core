import { aliases, colors } from '@synxty/design-tokens';
import { CommandCenterColors } from 'types/index.ts';

const { black, white } = colors;
const { primary } = aliases;

export const commandCenterColors: CommandCenterColors = {
  'commandCenter.foreground': white.shade[120],
  'commandCenter.activeForeground': white.shade[70],
  'commandCenter.background': black.tint[30],
  'commandCenter.activeBackground': black.tint[30],
  'commandCenter.border': black.tint[10],
  'commandCenter.inactiveForeground': black.tint[120],
  'commandCenter.inactiveBorder': black.tint[10],
  'commandCenter.activeBorder': primary.DEFAULT,
};
