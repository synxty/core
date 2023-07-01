import { ParseThemeColors } from 'types/index.ts';

const chatColorsProps = ['chat.requestBackground', 'chat.requestBorder'] as const;

export type ChatColors = ParseThemeColors<typeof chatColorsProps>;
