import { SupportedApps, SupportedThemes } from '@synxty/brand-assets/apps-specs';

export type PNGSpecs = {
  outputFile: OutputFile | string;
  appName: SupportedApps;
  theme: SupportedThemes;
};

export type OutputFile = {
  filename: string;
  addSuffixes?: FilenameSuffixes;
}

export type FilenameSuffixes = ('theme' | 'appName')[];
