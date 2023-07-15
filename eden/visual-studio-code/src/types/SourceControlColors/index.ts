import { ParseThemeColors } from 'types/index.ts';

const sourceControlColorsProps = ['scm.providerBorder'] as const;

export type SourceControlColors = ParseThemeColors<typeof sourceControlColorsProps>;
