import { aliases, colors } from '@synxty/design-tokens';
import { WelcomePageColors } from 'types/index.ts';

const { black } = colors;
const { primary } = aliases;

export const welcomePageColors: WelcomePageColors = {
  'welcomePage.background': black.tint[20],
  'welcomePage.progress.background': black.tint[40],
  'welcomePage.progress.foreground': primary.DEFAULT,
  'welcomePage.tileBackground': black.tint[30],
  'welcomePage.tileHoverBackground': black.tint[10],
  'welcomePage.tileBorder': black.tint[10],
  'walkThrough.embeddedEditorBackground': black.tint[30],
  'walkthrough.stepTitle.foreground': primary.DEFAULT,
};
