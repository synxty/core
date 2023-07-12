import { ParseThemeColors } from 'types/index.ts';

const bannerColorsProps = [
  'banner.background',
  'banner.foreground',
  'banner.iconForeground',
] as const;

export type BannerColors = ParseThemeColors<typeof bannerColorsProps>;
