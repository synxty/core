import { ParseThemeKeys } from 'types/index.ts';

const bracketPairsProps = [
  'editorBracketMatch.background',
  'editorBracketMatch.border',
  'editorBracketHighlight.foreground1',
  'editorBracketHighlight.foreground2',
  'editorBracketHighlight.foreground3',
  'editorBracketHighlight.foreground4',
  'editorBracketHighlight.foreground5',
  'editorBracketHighlight.foreground6',
  'editorBracketHighlight.unexpectedBracket.foreground',
  'editorBracketPairGuide.activeBackground1',
  'editorBracketPairGuide.activeBackground2',
  'editorBracketPairGuide.activeBackground3',
  'editorBracketPairGuide.activeBackground4',
  'editorBracketPairGuide.activeBackground5',
  'editorBracketPairGuide.activeBackground6',
  'editorBracketPairGuide.background1',
  'editorBracketPairGuide.background2',
  'editorBracketPairGuide.background3',
  'editorBracketPairGuide.background4',
  'editorBracketPairGuide.background5',
  'editorBracketPairGuide.background6',
] as const;

export type BracketPairs = ParseThemeKeys<typeof bracketPairsProps>;
