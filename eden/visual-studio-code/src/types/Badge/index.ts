import { ParseThemeColors } from 'types/index.ts';

const badgeProps = ['badge.foreground', 'badge.background'] as const;

export type Badge = ParseThemeColors<typeof badgeProps>;
