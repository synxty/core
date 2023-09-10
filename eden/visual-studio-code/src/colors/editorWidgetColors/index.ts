import { aliases, colors } from '@synxty/design-tokens';
import { TESTING } from 'constants/index.ts';
import { EditorWidgetColors } from 'types/index.ts';

const { black, white } = colors;
const { primary, secondary, danger, warning, info } = aliases;

export const editorWidgetColors: EditorWidgetColors = {
  'editorWidget.foreground': white.shade[10],
  'editorWidget.background': black.tint[30],
  'editorWidget.border': black.tint[10],
  'editorWidget.resizeBorder': primary.DEFAULT,
  'editorSuggestWidget.background': black.tint[30],
  'editorSuggestWidget.border': black.tint[10],
  'editorSuggestWidget.foreground': white.shade[30],
  'editorSuggestWidget.focusHighlightForeground': secondary.DEFAULT,
  'editorSuggestWidget.highlightForeground': primary.DEFAULT,
  'editorSuggestWidget.selectedBackground': black.tint[10],
  'editorSuggestWidget.selectedForeground': white.shade[10],
  'editorSuggestWidget.selectedIconForeground': secondary.DEFAULT,
  'editorSuggestWidgetStatus.foreground': TESTING,
  'editorHoverWidget.foreground': white.shade[10],
  'editorHoverWidget.background': black.tint[30],
  'editorHoverWidget.border': black.tint[10],
  'editorHoverWidget.highlightForeground': TESTING,
  'editorHoverWidget.statusBarBackground': black.tint[40],
  'editorGhostText.background': black.tint[30],
  'editorGhostText.foreground': black.tint[120],
  'editorStickyScroll.background': TESTING,
  'editorStickyScrollHover.background': TESTING,
  'debugExceptionWidget.background': TESTING,
  'debugExceptionWidget.border': TESTING,
  'editorMarkerNavigation.background': black.tint[30],
  'editorMarkerNavigationError.background': danger.DEFAULT,
  'editorMarkerNavigationWarning.background': warning.DEFAULT,
  'editorMarkerNavigationInfo.background': info.DEFAULT,
  'editorMarkerNavigationError.headerBackground': danger.shade[70],
  'editorMarkerNavigationWarning.headerBackground': warning.shade[70],
  'editorMarkerNavigationInfo.headerBackground': info.shade[70],
};
