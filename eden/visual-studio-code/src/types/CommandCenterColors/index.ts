import { ParseThemeKeys } from 'types/index.ts';

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

export type CommandCenterColors = ParseThemeKeys<typeof commandCenterColorsProps>;
