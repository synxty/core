import { ParseThemeKeys } from 'types/index.ts';

const sourceControlColorsProps = ['scm.providerBorder'] as const;

export type SourceControlColors = ParseThemeKeys<typeof sourceControlColorsProps>;
