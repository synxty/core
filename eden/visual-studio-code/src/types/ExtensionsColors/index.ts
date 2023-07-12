import { ParseThemeColors } from 'types/index.ts';

const extensionsColorsProps = [
  'extensionButton.prominentForeground',
  'extensionButton.prominentBackground',
  'extensionButton.prominentHoverBackground',
  'extensionButton.background',
  'extensionButton.foreground',
  'extensionButton.hoverBackground',
  'extensionButton.separator',
  'extensionBadge.remoteBackground',
  'extensionBadge.remoteForeground',
  'extensionIcon.starForeground',
  'extensionIcon.verifiedForeground',
  'extensionIcon.preReleaseForeground',
  'extensionIcon.sponsorForeground',
] as const;

export type ExtensionsColors = ParseThemeColors<typeof extensionsColorsProps>;
