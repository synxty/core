import { aliases, colors } from '@synxty/design-tokens';
import { TESTING } from 'constants/index.ts';
import { DebugColors } from 'types/index.ts';

const { black, white } = colors;
const { primary, danger, magenta, orange, blue, teal } = aliases;

export const debugColors: DebugColors = {
  'debugToolBar.background': black.tint[20],
  'debugToolBar.border': TESTING,
  'editor.stackFrameHighlightBackground': black.tint[30],
  'editor.focusedStackFrameHighlightBackground': TESTING,
  'editor.inlineValuesForeground': TESTING,
  'editor.inlineValuesBackground': TESTING,
  'debugView.exceptionLabelForeground': TESTING,
  'debugView.exceptionLabelBackground': TESTING,
  'debugView.stateLabelForeground': black.tint[10],
  'debugView.stateLabelBackground': primary.DEFAULT,
  'debugView.valueChangedHighlight': TESTING,
  'debugTokenExpression.name': magenta.DEFAULT,
  'debugTokenExpression.value': white.shade[90],
  'debugTokenExpression.string': orange.DEFAULT,
  'debugTokenExpression.boolean': blue.DEFAULT,
  'debugTokenExpression.number': teal.DEFAULT,
  'debugTokenExpression.error': danger.DEFAULT,
};
