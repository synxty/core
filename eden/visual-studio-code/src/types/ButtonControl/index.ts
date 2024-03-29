import { ParseThemeKeys } from 'types/index.ts';

const buttonControlProps = [
  'button.background',
  'button.foreground',
  'button.border',
  'button.separator',
  'button.hoverBackground',
  'button.secondaryForeground',
  'button.secondaryBackground',
  'button.secondaryHoverBackground',
  'checkbox.background',
  'checkbox.foreground',
  'checkbox.border',
  'checkbox.selectBackground',
  'checkbox.selectBorder',
] as const;

export type ButtonControl = ParseThemeKeys<typeof buttonControlProps>;
