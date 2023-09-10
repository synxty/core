import { ParseThemeKeys } from 'types/index.ts';

const keybindingLabelColorsProps = [
  'keybindingLabel.background',
  'keybindingLabel.foreground',
  'keybindingLabel.border',
  'keybindingLabel.bottomBorder',
] as const;

export type KeybindingLabelColors = ParseThemeKeys<typeof keybindingLabelColorsProps>;
