import { aliases, colors } from '@synxty/design-tokens';
import { DEBUGGING, TESTING } from 'constants/index.ts';
import { PeekViewColors } from 'types/index.ts';

const { black, white } = colors;
const { primary } = aliases;

export const peekViewColors: PeekViewColors = {
  'peekView.border': primary.DEFAULT,
  'peekViewEditor.background': black.tint[20],
  'peekViewEditorGutter.background': black.tint[20],
  'peekViewEditor.matchHighlightBackground': primary.shade[30],
  //'peekViewEditor.matchHighlightBorder': TESTING,
  'peekViewResult.background': black.tint[30],
  'peekViewResult.fileForeground': white.shade[10],
  'peekViewResult.lineForeground': white.shade[40],
  'peekViewResult.matchHighlightBackground': primary.shade[30],
  'peekViewResult.selectionBackground': black.tint[10],
  'peekViewResult.selectionForeground': white.shade[10],
  'peekViewTitle.background': black.tint[30],
  'peekViewTitleDescription.foreground': white.shade[120],
  'peekViewTitleLabel.foreground': white.shade[10],
  'peekViewEditorStickyScroll.background': TESTING,
};
