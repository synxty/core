import { AppIconConfig, SupportedApps } from '../types';
import { appsIdentity } from './identity';

export function getAppIconConfig(app: SupportedApps): AppIconConfig {
  return appsIdentity[app].icon;
}
