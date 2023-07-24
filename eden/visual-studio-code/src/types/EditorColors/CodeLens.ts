import { ParseThemeKeys } from 'types/index.ts';

const codeLensProps = ['editorCodeLens.foreground'] as const;

export type CodeLens = ParseThemeKeys<typeof codeLensProps>;
