import { ParseThemeColors } from '..';

const codeLensProps = [
  "editorCodeLens.foreground"
] as const;

export type CodeLens = ParseThemeColors<typeof codeLensProps>;
