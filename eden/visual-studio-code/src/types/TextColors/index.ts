import { ParseThemeColors } from 'types/index.ts';

const textColorsProps = [
  'textBlockQuote.background',
  'textBlockQuote.border',
  'textCodeBlock.background',
  'textLink.activeForeground',
  'textLink.foreground',
  'textPreformat.foreground',
  'textSeparator.foreground',
] as const;

export type TextColors = ParseThemeColors<typeof textColorsProps>;
