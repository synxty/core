import { aliases, colors } from '@synxty/design-tokens';
import { TESTING } from 'constants/index.ts';
import { StatusBarColors } from 'types/index.ts';

const { black, white } = colors;
const { primary, danger, warning, amber } = aliases;

export const statusBarColors: StatusBarColors = {
  'statusBar.background': black.tint[20],
  'statusBar.foreground': white.shade[70],
  //"statusBar.border": black.tint[30],
  'statusBar.debuggingBackground': danger.DEFAULT,
  'statusBar.debuggingForeground': white.shade[10],
  //"statusBar.debuggingBorder": TESTING,
  'statusBar.noFolderBackground': primary.DEFAULT,
  'statusBar.noFolderForeground': black.tint[30],
  //"statusBar.noFolderBorder": TESTING,
  'statusBarItem.activeBackground': `${black.tint[70]}40`,
  'statusBarItem.hoverBackground': `${black.tint[110]}40`,
  'statusBarItem.prominentForeground': TESTING,
  'statusBarItem.prominentBackground': black.tint[70],
  'statusBarItem.prominentHoverBackground': TESTING,
  'statusBarItem.remoteBackground': black.tint[20],
  'statusBarItem.remoteForeground': amber.DEFAULT,
  'statusBarItem.errorBackground': danger.DEFAULT,
  'statusBarItem.errorForeground': white.shade[10],
  'statusBarItem.warningForeground': white.shade[10],
  'statusBarItem.warningBackground': warning.DEFAULT,
  'statusBarItem.compactHoverBackground': `${black.tint[110]}40`,
  'statusBarItem.focusBorder': TESTING,
  'statusBar.focusBorder': black.tint[70],
  'statusBar.offlineBackground': TESTING,
  'statusBar.offlineForeground': TESTING,
};
