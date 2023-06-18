import { SupportedApps, SupportedThemes } from '@synxty/brand-assets/apps-specs';

export type PNGSpecs = {
  outputFilename: OutputFilename | string;
  appName: SupportedApps;
  theme: SupportedThemes;
};

export type OutputFilename = {
  filename: string;
  addSuffixes?: FilenameSuffixes;
}

export type FilenameSuffixes = ('appName' | 'theme' )[];
