import { ParseThemeKeys } from 'types/index.ts';

const portsColorsProps = ['ports.iconRunningProcessForeground'] as const;

export type PortsColors = ParseThemeKeys<typeof portsColorsProps>;
