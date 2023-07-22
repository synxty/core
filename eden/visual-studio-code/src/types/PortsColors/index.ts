import { ParseThemeColors } from 'types/index.ts';

const portsColorsProps = ['ports.iconRunningProcessForeground'] as const;

export type PortsColors = ParseThemeColors<typeof portsColorsProps>;
