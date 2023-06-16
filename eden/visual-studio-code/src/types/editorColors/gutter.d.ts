const gutterKeys = [
  "editorGutter.background",
  "editorGutter.modifiedBackground",
  "editorGutter.addedBackground",
  "editorGutter.deletedBackground",
  "editorGutter.commentRangeForeground",
  "editorGutter.commentGlyphForeground",
  "editorGutter.commentUnresolvedGlyphForeground",
  "editorGutter.foldingControlForeground"
] as const;

export type Gutter = Partial<{ [K in typeof gutterKeys[number]]: string }>;
