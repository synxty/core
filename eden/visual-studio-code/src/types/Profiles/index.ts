import { ParseThemeColors } from 'types/index.ts';

const profilesProps = ['profileBadge.background', 'profileBadge.foreground'] as const;

export type Profiles = ParseThemeColors<typeof profilesProps>;
