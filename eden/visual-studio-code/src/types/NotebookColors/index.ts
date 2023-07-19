import { ParseThemeColors } from 'types/index.ts';

const notebookColorsProps = [
  'notebook.editorBackground',
  'notebook.cellBorderColor',
  'notebook.cellHoverBackground',
  'notebook.cellInsertionIndicator',
  'notebook.cellStatusBarItemHoverBackground',
  'notebook.cellToolbarSeparator',
  'notebook.cellEditorBackground',
  'notebook.focusedCellBackground',
  'notebook.focusedCellBorder',
  'notebook.focusedEditorBorder',
  'notebook.inactiveFocusedCellBorder',
  'notebook.inactiveSelectedCellBorder',
  'notebook.outputContainerBackgroundColor',
  'notebook.outputContainerBorderColor',
  'notebook.selectedCellBackground',
  'notebook.selectedCellBorder',
  'notebook.symbolHighlightBackground',
  'notebookScrollbarSlider.activeBackground',
  'notebookScrollbarSlider.background',
  'notebookScrollbarSlider.hoverBackground',
  'notebookStatusErrorIcon.foreground',
  'notebookStatusRunningIcon.foreground',
  'notebookStatusSuccessIcon.foreground',
  'notebookEditorOverviewRuler.runningCellForeground',
] as const;

export type NotebookColors = ParseThemeColors<typeof notebookColorsProps>;
