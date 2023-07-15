import { aliases, colors } from '@synxty/design-tokens';
import { TESTING } from 'constants/index.ts';
import { ActivityBar, DebugColors } from 'types/index.ts';

const { black } = colors;
const { primary } = aliases;

export const debugColors: DebugColors = {
  'debugToolBar.background': TESTING,
  'debugToolBar.border': TESTING,
  'editor.stackFrameHighlightBackground': TESTING,
  'editor.focusedStackFrameHighlightBackground': TESTING,
  'editor.inlineValuesForeground': TESTING,
  'editor.inlineValuesBackground': TESTING,
  'debugView.exceptionLabelForeground': TESTING,
  'debugView.exceptionLabelBackground': TESTING,
  'debugView.stateLabelForeground': TESTING,
  'debugView.stateLabelBackground': TESTING,
  'debugView.valueChangedHighlight': TESTING,
  'debugTokenExpression.name': TESTING,
  'debugTokenExpression.value': TESTING,
  'debugTokenExpression.string': TESTING,
  'debugTokenExpression.boolean': TESTING,
  'debugTokenExpression.number': TESTING,
  'debugTokenExpression.error': TESTING,
};
