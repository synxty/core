import { ParseThemeColors } from 'types/index.ts';

const scrollbarControlProps = [
  'scrollbar.shadow',
  'scrollbarSlider.activeBackground',
  'scrollbarSlider.background',
  'scrollbarSlider.hoverBackground',
] as const;

export type ScrollbarControl = ParseThemeColors<typeof scrollbarControlProps>;
