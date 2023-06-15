import { CodeLens } from './codeLens';
export { CodeLens } from './codeLens';

import { General } from './general';
export { General } from './general';

import { LightBulb } from './lightbulb';
export { LightBulb } from './lightbulb';

import { BracketPairs } from './bracketPairs';
export { BracketPairs } from './bracketPairs';

import { OverviewRuler } from './overviewRuler';
export { OverviewRuler } from './overviewRuler';

export type EditorColors = 
  General | 
  CodeLens | 
  LightBulb |
  BracketPairs |
  OverviewRuler
;
