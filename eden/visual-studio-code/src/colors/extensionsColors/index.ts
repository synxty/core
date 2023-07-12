import { aliases, colors } from '@synxty/design-tokens';
import { DEBUGGING, TESTING } from 'constants/index.ts';
import { ExtensionsColors } from 'types/index.ts';

const { black } = colors;
const { primary, tertiary, orange, info, violet, red, blue } = aliases;

export const extensionsColors: ExtensionsColors = {
  'extensionButton.prominentForeground': black.tint[10],
  'extensionButton.prominentBackground': primary.DEFAULT,
  'extensionButton.prominentHoverBackground': TESTING,
  'extensionButton.background': primary.DEFAULT,
  'extensionButton.foreground': black.tint[10],
  'extensionButton.hoverBackground': tertiary.DEFAULT,
  'extensionButton.separator': black.tint[10],
  'extensionBadge.remoteBackground': TESTING,
  'extensionBadge.remoteForeground': TESTING,
  'extensionIcon.starForeground': orange.DEFAULT,
  'extensionIcon.verifiedForeground': info.DEFAULT,
  'extensionIcon.preReleaseForeground': violet.DEFAULT,
  'extensionIcon.sponsorForeground': red.tint[20],
};
