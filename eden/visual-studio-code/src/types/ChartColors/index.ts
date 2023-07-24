import { ParseThemeKeys } from 'types/index.ts';

const chartColorsProps = [
  'charts.foreground',
  'charts.lines',
  'charts.red',
  'charts.blue',
  'charts.yellow',
  'charts.orange',
  'charts.green',
  'charts.purple',
] as const;

export type ChartColors = ParseThemeKeys<typeof chartColorsProps>;
