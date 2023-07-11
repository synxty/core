import { ParseThemeColors } from 'types/index.ts';

const inlineChatColorsProps = [
  'inlineChat.background',
  'inlineChat.border',
  'inlineChat.shadow',
  'inlineChat.regionHighlight',
  'inlineChatInput.border',
  'inlineChatInput.focusBorder',
  'inlineChatInput.placeholderForeground',
  'inlineChatInput.background',
  'inlineChatDiff.inserted',
  'inlineChatrDiff.removed',
] as const;

export type InlineChatColors = ParseThemeColors<typeof inlineChatColorsProps>;
