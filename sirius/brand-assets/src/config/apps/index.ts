import { AppIconConfig, SupportedApps } from '../types';
import { appsIdentity } from './appsIdentity';

export { supportedApps } from './supportedApps';

export function getAppIconConfig(app: SupportedApps): AppIconConfig {
  return appsIdentity[app].icon;
}
