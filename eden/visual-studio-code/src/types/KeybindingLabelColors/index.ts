import { ParseThemeColors } from 'types/index.ts';

const keybindingLabelColorsProps = [
  'keybindingLabel.background',
  'keybindingLabel.foreground',
  'keybindingLabel.border',
  'keybindingLabel.bottomBorder',
] as const;

export type KeybindingLabelColors = ParseThemeColors<typeof keybindingLabelColorsProps>;
