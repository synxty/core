import { colors, aliases } from '@synxty/design-tokens';
import { BracketPairs } from 'types/index.ts';

const { primary, magenta, violet, teal, tertiary, chartreuse, danger } = aliases;
const { black } = colors;

export const bracketPairs: BracketPairs = {
  //"editorBracketMatch.background": TESTING,
  'editorBracketMatch.border': black.tint[120],
  'editorBracketHighlight.foreground1': primary.DEFAULT,
  'editorBracketHighlight.foreground2': magenta.DEFAULT,
  'editorBracketHighlight.foreground3': teal.DEFAULT,
  'editorBracketHighlight.foreground4': tertiary.DEFAULT,
  'editorBracketHighlight.foreground5': violet.DEFAULT,
  'editorBracketHighlight.foreground6': chartreuse.DEFAULT,
  'editorBracketHighlight.unexpectedBracket.foreground': danger.DEFAULT,
  // "editorBracketPairGuide.activeBackground1": primary.DEFAULT,
  // "editorBracketPairGuide.activeBackground2": magenta.DEFAULT,
  // "editorBracketPairGuide.activeBackground3": teal.DEFAULT,
  // "editorBracketPairGuide.activeBackground4": primary.DEFAULT,
  // "editorBracketPairGuide.activeBackground5": violet.DEFAULT,
  // "editorBracketPairGuide.activeBackground6": chartreuse.DEFAULT,
  // "editorBracketPairGuide.background1": TESTING,
  // "editorBracketPairGuide.background2": TESTING,
  // "editorBracketPairGuide.background3": TESTING,
  // "editorBracketPairGuide.background4": TESTING,
  // "editorBracketPairGuide.background5": TESTING,
  // "editorBracketPairGuide.background6": TESTING,
};
