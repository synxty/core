import { AppSpecs, ProfileIconSpecs, SupportedApps } from '../types';
import { discord } from './Discord';
import { facebook } from './Facebook';
import { github } from './GitHub';
import { instagram } from './Instagram';
import { linkedin } from './LinkedIn';
import { twitch } from './Twitch';
import { twitter } from './Twitter';
import { vscode } from './VSCode';
import { youtube } from './YouTube';

export const appSpecs: AppSpecs = {
  discord,
  facebook,
  github,
  instagram,
  linkedin,
  twitch,
  twitter,
  vscode,
  youtube
} as const;

export function getProfileIconSpecs(app: SupportedApps): ProfileIconSpecs {
  return appSpecs[app].icon;
}
