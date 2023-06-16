import { CodeLens } from './CodeLens';
export { CodeLens } from './CodeLens';

import { General } from './General';
export { General } from './General';

import { LightBulb } from './Lightbulb';
export { LightBulb } from './Lightbulb';

import { BracketPairs } from './BracketPairs';
export { BracketPairs } from './BracketPairs';

import { OverviewRuler } from './OverviewRuler';
export { OverviewRuler } from './OverviewRuler';

import { Gutter } from './Gutter';
export { Gutter } from './Gutter';

import { CommentsWidget } from './CommentsWidget';
export { CommentsWidget } from './CommentsWidget';

export type EditorColors = 
  General | 
  CodeLens | 
  LightBulb |
  BracketPairs |
  OverviewRuler |
  Gutter |
  CommentsWidget
;
