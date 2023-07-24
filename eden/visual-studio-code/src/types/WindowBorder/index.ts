import { ParseThemeKeys } from 'types/index.ts';

const windowBorderProps = ['window.activeBorder', 'window.inactiveBorder'] as const;

export type WindowBorder = ParseThemeKeys<typeof windowBorderProps>;
