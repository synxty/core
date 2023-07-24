import { ParseThemeKeys } from 'types/index.ts';

const progressBarProps = ['progressBar.background'] as const;

export type ProgressBar = ParseThemeKeys<typeof progressBarProps>;
