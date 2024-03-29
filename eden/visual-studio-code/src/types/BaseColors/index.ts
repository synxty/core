import { ParseThemeKeys } from 'types/index.ts';

const baseColorsProps = [
  'focusBorder',
  'foreground',
  'disabledForeground',
  'widget.border',
  'widget.shadow',
  'selection.background',
  'descriptionForeground',
  'errorForeground',
  'icon.foreground',
  'sash.hoverBorder',
] as const;

export type BaseColors = ParseThemeKeys<typeof baseColorsProps>;
