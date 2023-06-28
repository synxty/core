import { ParseThemeColors } from 'types/index.ts';

const progressBarProps = ['progressBar.background'] as const;

export type ProgressBar = ParseThemeColors<typeof progressBarProps>;
