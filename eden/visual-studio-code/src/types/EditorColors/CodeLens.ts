import { ParseThemeColors } from 'types/index.ts';

const codeLensProps = [
  "editorCodeLens.foreground"
] as const;

export type CodeLens = ParseThemeColors<typeof codeLensProps>;
