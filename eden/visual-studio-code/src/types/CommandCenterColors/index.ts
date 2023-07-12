import { ParseThemeColors } from 'types/index.ts';

const commandCenterColorsProps = [
  'commandCenter.foreground',
  'commandCenter.activeForeground',
  'commandCenter.background',
  'commandCenter.activeBackground',
  'commandCenter.border',
  'commandCenter.inactiveForeground',
  'commandCenter.inactiveBorder',
  'commandCenter.activeBorder',
] as const;

export type CommandCenterColors = ParseThemeColors<typeof commandCenterColorsProps>;
