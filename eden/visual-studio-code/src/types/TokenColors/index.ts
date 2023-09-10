import { FontStyle } from './FontStyle.ts';
import { Scopes } from './Scopes.ts';

export type TokenColors = {
  scope: Scopes | Scopes[];
  name?: string;
  settings: {
    background?: string;
    content?: string;
    fontStyle?: FontStyle;
    foreground?: string;
  };
}[];
