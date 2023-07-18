import { aliases, colors } from '@synxty/design-tokens';
import { TESTING } from 'constants/index.ts';
import { DebugIconsColors } from 'types/index.ts';

const { black } = colors;
const { primary, danger, info, warning, teal, blue, red, green } = aliases;

export const debugIconsColors: DebugIconsColors = {
  'debugIcon.breakpointForeground': danger.DEFAULT,
  'debugIcon.breakpointDisabledForeground': black.tint[70],
  'debugIcon.breakpointUnverifiedForeground': TESTING,
  'debugIcon.breakpointCurrentStackframeForeground': primary.DEFAULT,
  'debugIcon.breakpointStackframeForeground': TESTING,
  'debugIcon.startForeground': green.DEFAULT,
  'debugIcon.pauseForeground': blue.DEFAULT,
  'debugIcon.stopForeground': red.DEFAULT,
  'debugIcon.disconnectForeground': TESTING,
  'debugIcon.restartForeground': green.DEFAULT,
  'debugIcon.stepOverForeground': blue.DEFAULT,
  'debugIcon.stepIntoForeground': blue.DEFAULT,
  'debugIcon.stepOutForeground': blue.DEFAULT,
  'debugIcon.continueForeground': teal.DEFAULT,
  'debugIcon.stepBackForeground': TESTING,
  'debugConsole.infoForeground': info.DEFAULT,
  'debugConsole.warningForeground': warning.DEFAULT,
  'debugConsole.errorForeground': danger.DEFAULT,
  'debugConsole.sourceForeground': black.tint[120],
  'debugConsoleInputIcon.foreground': TESTING,
};
