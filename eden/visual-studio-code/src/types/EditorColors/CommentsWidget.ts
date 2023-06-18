import { ParseThemeColors } from '..';

const commentsWidgetProps = [
  "editorCommentsWidget.resolvedBorder",
  "editorCommentsWidget.unresolvedBorder",
  "editorCommentsWidget.rangeBackground",
  "editorCommentsWidget.rangeBorder",
  "editorCommentsWidget.rangeActiveBackground",
  "editorCommentsWidget.rangeActiveBorder"
] as const;

export type CommentsWidget = ParseThemeColors<typeof commentsWidgetProps>;
