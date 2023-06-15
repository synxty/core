const codeLensKeys = [
  "editorCodeLens.foreground"
] as const;

export type CodeLens = Partial<{ [K in typeof codeLensKeys[number]]: string }>;
