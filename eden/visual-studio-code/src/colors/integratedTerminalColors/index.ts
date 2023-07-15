import { aliases, colors } from '@synxty/design-tokens';
import { TESTING } from 'constants/index.ts';
import { IntegratedTerminalColors } from 'types/index.ts';

const { black, white } = colors;
const { primary, blue, teal, green, magenta, red, amber, success, danger } = aliases;

export const integratedTerminalColors: IntegratedTerminalColors = {
  'terminal.background': black.tint[20],
  'terminal.border': black.tint[10],
  'terminal.foreground': white.shade[10],
  'terminal.ansiBlack': black.DEFAULT,
  'terminal.ansiBlue': blue.DEFAULT,
  'terminal.ansiCyan': teal.DEFAULT,
  'terminal.ansiGreen': green.DEFAULT,
  'terminal.ansiMagenta': magenta.DEFAULT,
  'terminal.ansiRed': red.DEFAULT,
  'terminal.ansiWhite': white.DEFAULT,
  'terminal.ansiYellow': amber.DEFAULT,
  'terminal.ansiBrightBlack': black.tint[20],
  'terminal.ansiBrightBlue': blue.tint[20],
  'terminal.ansiBrightCyan': teal.tint[50],
  'terminal.ansiBrightGreen': green.tint[20],
  'terminal.ansiBrightMagenta': magenta.tint[40],
  'terminal.ansiBrightRed': red.tint[20],
  'terminal.ansiBrightWhite': white.shade[20],
  'terminal.ansiBrightYellow': amber.tint[20],
  'terminal.selectionBackground': `${black.tint[120]}40`,
  //'terminal.selectionForeground': TESTING,
  'terminal.inactiveSelectionBackground': `${black.tint[90]}40`,
  //'terminal.findMatchBackground': TESTING,
  //'terminal.findMatchBorder': TESTING,
  //"terminal.findMatchHighlightBackground": TESTING,
  'terminalCursor.background': black.tint[10],
  'terminalCursor.foreground': white.shade[10],
  //'terminal.dropBackground': TESTING,
  'terminal.tab.activeBorder': primary.DEFAULT,
  'terminalCommandDecoration.defaultBackground': TESTING,
  'terminalCommandDecoration.successBackground': success.DEFAULT,
  'terminalCommandDecoration.errorBackground': danger.DEFAULT,
  'terminalOverviewRuler.cursorForeground': TESTING,
  'terminalOverviewRuler.findMatchForeground': TESTING,
};
