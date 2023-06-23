import { CodeLens } from './CodeLens.ts';
export { CodeLens } from './CodeLens.ts';

import { General } from './General.ts';
export { General } from './General.ts';

import { LightBulb } from './Lightbulb.ts';
export { LightBulb } from './Lightbulb.ts';

import { BracketPairs } from './BracketPairs.ts';
export { BracketPairs } from './BracketPairs.ts';

import { OverviewRuler } from './OverviewRuler.ts';
export { OverviewRuler } from './OverviewRuler.ts';

import { Gutter } from './Gutter.ts';
export { Gutter } from './Gutter.ts';

import { CommentsWidget } from './CommentsWidget.ts';
export { CommentsWidget } from './CommentsWidget.ts';

export type EditorColors =
  | General
  | CodeLens
  | LightBulb
  | BracketPairs
  | OverviewRuler
  | Gutter
  | CommentsWidget;
