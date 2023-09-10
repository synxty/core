import { ParseThemeKeys } from 'types/index.ts';

const chatColorsProps = ['chat.requestBackground', 'chat.requestBorder'] as const;

export type ChatColors = ParseThemeKeys<typeof chatColorsProps>;
