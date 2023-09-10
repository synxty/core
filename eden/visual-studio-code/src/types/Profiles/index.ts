import { ParseThemeKeys } from 'types/index.ts';

const profilesProps = ['profileBadge.background', 'profileBadge.foreground'] as const;

export type Profiles = ParseThemeKeys<typeof profilesProps>;
