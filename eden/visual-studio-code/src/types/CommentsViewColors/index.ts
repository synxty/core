import { ParseThemeKeys } from 'types/index.ts';

const commentsViewColorsProps = [
  'commentsView.resolvedIcon',
  'commentsView.unresolvedIcon',
] as const;

export type CommentsViewColors = ParseThemeKeys<typeof commentsViewColorsProps>;
