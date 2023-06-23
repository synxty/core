import { AppSpecs, ProfileIconSpecs, SupportedApps } from 'apps-specs/types/index.ts';
import { discord } from './Discord/index.ts';
import { facebook } from './Facebook/index.ts';
import { github } from './GitHub/index.ts';
import { instagram } from './Instagram/index.ts';
import { linkedin } from './LinkedIn/index.ts';
import { twitch } from './Twitch/index.ts';
import { twitter } from './Twitter/index.ts';
import { vscode } from './VSCode/index.ts';
import { youtube } from './YouTube/index.ts';

const appSpecs: AppSpecs = {
  discord,
  facebook,
  github,
  instagram,
  linkedin,
  twitch,
  twitter,
  vscode,
  youtube,
} as const;

export function getProfileIconSpecs(app: SupportedApps): ProfileIconSpecs {
  return appSpecs[app].icon;
}
