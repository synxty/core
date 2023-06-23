import { ParseThemeColors } from 'types/index.ts';

const statusBarColorsProps = [
  'statusBar.background',
  'statusBar.foreground',
  'statusBar.border',
  'statusBar.debuggingBackground',
  'statusBar.debuggingForeground',
  'statusBar.debuggingBorder',
  'statusBar.noFolderForeground',
  'statusBar.noFolderBackground',
  'statusBar.noFolderBorder',
  'statusBarItem.activeBackground',
  'statusBarItem.hoverBackground',
  'statusBarItem.prominentForeground',
  'statusBarItem.prominentBackground',
  'statusBarItem.prominentHoverBackground',
  'statusBarItem.remoteBackground',
  'statusBarItem.remoteForeground',
  'statusBarItem.errorBackground',
  'statusBarItem.errorForeground',
  'statusBarItem.warningBackground',
  'statusBarItem.warningForeground',
  'statusBarItem.compactHoverBackground',
  'statusBarItem.focusBorder',
  'statusBar.focusBorder',
  'statusBar.offlineBackground',
  'statusBar.offlineForeground',
] as const;

export type StatusBarColors = ParseThemeColors<typeof statusBarColorsProps>;
