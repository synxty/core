import { ParseThemeKeys } from 'types/index.ts';

const actionColorsProps = [
  'toolbar.hoverBackground',
  'toolbar.hoverOutline',
  'toolbar.activeBackground',
] as const;

export type ActionColors = ParseThemeKeys<typeof actionColorsProps>;
