import { EditorColors } from 'types/index.ts';
import { bracketPairs } from './bracketPairs.ts';
import { codeLens } from './codeLens.ts';
import { commentsWidget } from './commentsWidget.ts';
import { general } from './general.ts';
import { gutter } from './gutter.ts';
import { lightbulb } from './lightbulb.ts';
import { overviewRuler } from './overviewRuler.ts';

export const editorColors: EditorColors = {
  ...general,
  ...codeLens,
  ...lightbulb,
  ...bracketPairs,
  ...overviewRuler,
  ...gutter,
  ...commentsWidget,
};
