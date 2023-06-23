import { ParseThemeColors } from 'types/index.ts';

const windowBorderProps = [
  "window.activeBorder",
  "window.inactiveBorder"
] as const;

export type WindowBorder = ParseThemeColors<typeof windowBorderProps>;
