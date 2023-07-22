import { ParseThemeColors } from 'types/index.ts';

const commentsViewColorsProps = [
  'commentsView.resolvedIcon',
  'commentsView.unresolvedIcon',
] as const;

export type CommentsViewColors = ParseThemeColors<typeof commentsViewColorsProps>;
