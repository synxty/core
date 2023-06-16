const commentsWidget = [
  "editorCommentsWidget.resolvedBorder",
  "editorCommentsWidget.unresolvedBorder",
  "editorCommentsWidget.rangeBackground",
  "editorCommentsWidget.rangeBorder",
  "editorCommentsWidget.rangeActiveBackground",
  "editorCommentsWidget.rangeActiveBorder"
] as const;

export type CommentsWidget = Partial<{ [K in typeof commentsWidget[number]]: string }>;
