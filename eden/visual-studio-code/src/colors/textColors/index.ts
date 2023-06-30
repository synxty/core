import { aliases, colors } from '@synxty/design-tokens';
import { TESTING } from 'constants/index.ts';
import { TextColors } from 'types/index.ts';

const { black } = colors;
const { primary, info } = aliases;

export const textColors: TextColors = {
  'textBlockQuote.background': black.tint[30],
  'textBlockQuote.border': primary.DEFAULT,
  'textCodeBlock.background': black.tint[10],
  'textLink.activeForeground': info.tint[30],
  'textLink.foreground': info.DEFAULT,
  'textPreformat.foreground': primary.DEFAULT,
  'textSeparator.foreground': TESTING,
};
