import { ParseThemeColors } from 'types/index.ts';

const welcomePageColorsProps = [
  'welcomePage.background',
  'welcomePage.progress.background',
  'welcomePage.progress.foreground',
  'welcomePage.tileBackground',
  'welcomePage.tileHoverBackground',
  'welcomePage.tileBorder',
  'walkThrough.embeddedEditorBackground',
  'walkthrough.stepTitle.foreground',
] as const;

export type WelcomePageColors = ParseThemeColors<typeof welcomePageColorsProps>;
