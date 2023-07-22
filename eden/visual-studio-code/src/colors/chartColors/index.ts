import { aliases, colors } from '@synxty/design-tokens';
import { ChartColors } from 'types/index.ts';

const { white } = colors;
const { primary, red, blue, yellow, orange, green, violet } = aliases;

export const chartColors: ChartColors = {
  'charts.foreground': white.shade[10],
  'charts.lines': primary.DEFAULT,
  'charts.red': red.DEFAULT,
  'charts.blue': blue.DEFAULT,
  'charts.yellow': yellow.DEFAULT,
  'charts.orange': orange.DEFAULT,
  'charts.green': green.DEFAULT,
  'charts.purple': violet.DEFAULT,
};
