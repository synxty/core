import { colors, aliases } from '@synxty/design-tokens';
import { BracketPairs } from 'types/index.ts';

const { primary, violet, tertiary, chartreuse, danger, red, blue } = aliases;
const { black } = colors;

export const bracketPairs: BracketPairs = {
  'editorBracketMatch.border': black.tint[120],
  'editorBracketHighlight.foreground1': primary.DEFAULT,
  'editorBracketHighlight.foreground2': red.tint[70],
  'editorBracketHighlight.foreground3': blue.tint[40],
  'editorBracketHighlight.foreground4': tertiary.DEFAULT,
  'editorBracketHighlight.foreground5': violet.DEFAULT,
  'editorBracketHighlight.foreground6': chartreuse.DEFAULT,
  'editorBracketHighlight.unexpectedBracket.foreground': danger.DEFAULT,
};
