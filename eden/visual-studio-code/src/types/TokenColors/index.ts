import { FontStyle } from './FontStyle.ts';
import { Scopes } from './Scopes.ts';

export type TokenColors = {
  scope: Scopes | Scopes[];
  name?: string;
  settings: {
    foreground?: string;
    fontStyle?: FontStyle;
  };
}[];
