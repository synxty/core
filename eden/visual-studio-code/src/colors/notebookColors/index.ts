import { aliases, colors } from '@synxty/design-tokens';
import { TESTING } from 'constants/index.ts';
import { NotebookColors } from 'types/index.ts';

const { black } = colors;
const { primary, success, danger } = aliases;

export const notebookColors: NotebookColors = {
  'notebook.editorBackground': black.tint[20],
  'notebook.cellBorderColor': black.tint[10],
  'notebook.cellHoverBackground': black.tint[10],
  'notebook.cellInsertionIndicator': primary.DEFAULT,
  'notebook.cellStatusBarItemHoverBackground': black.tint[20],
  'notebook.cellToolbarSeparator': black.tint[20],
  'notebook.cellEditorBackground': black.tint[30],
  'notebook.focusedCellBackground': black.tint[20],
  'notebook.focusedCellBorder': primary.DEFAULT,
  'notebook.focusedEditorBorder': primary.DEFAULT,
  'notebook.inactiveFocusedCellBorder': black.tint[30],
  'notebook.inactiveSelectedCellBorder': TESTING,
  'notebook.outputContainerBackgroundColor': black.tint[20],
  'notebook.outputContainerBorderColor': TESTING,
  'notebook.selectedCellBackground': TESTING,
  'notebook.selectedCellBorder': TESTING,
  'notebook.symbolHighlightBackground': TESTING,
  'notebookScrollbarSlider.activeBackground': `${black.tint[110]}40`,
  'notebookScrollbarSlider.background': `${black.tint[70]}40`,
  'notebookScrollbarSlider.hoverBackground': `${black.tint[110]}40`,
  'notebookStatusErrorIcon.foreground': danger.DEFAULT,
  'notebookStatusRunningIcon.foreground': TESTING,
  'notebookStatusSuccessIcon.foreground': success.DEFAULT,
  'notebookEditorOverviewRuler.runningCellForeground': TESTING,
};
