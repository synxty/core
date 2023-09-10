import { ParseThemeKeys } from 'types/index.ts';

const debugIconsColorsProps = [
  'debugIcon.breakpointForeground',
  'debugIcon.breakpointDisabledForeground',
  'debugIcon.breakpointUnverifiedForeground',
  'debugIcon.breakpointCurrentStackframeForeground',
  'debugIcon.breakpointStackframeForeground',
  'debugIcon.startForeground',
  'debugIcon.pauseForeground',
  'debugIcon.stopForeground',
  'debugIcon.disconnectForeground',
  'debugIcon.restartForeground',
  'debugIcon.stepOverForeground',
  'debugIcon.stepIntoForeground',
  'debugIcon.stepOutForeground',
  'debugIcon.continueForeground',
  'debugIcon.stepBackForeground',
  'debugConsole.infoForeground',
  'debugConsole.warningForeground',
  'debugConsole.errorForeground',
  'debugConsole.sourceForeground',
  'debugConsoleInputIcon.foreground',
] as const;

export type DebugIconsColors = ParseThemeKeys<typeof debugIconsColorsProps>;
