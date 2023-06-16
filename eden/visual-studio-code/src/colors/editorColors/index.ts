import { EditorColors } from '../../types';
import { bracketPairs } from './bracketPairs';
import { codeLens } from './codeLens';
import { commentsWidget } from './commentsWidget';
import { general } from './general';
import { gutter } from './gutter';
import { lightbulb } from './lightbulb';
import { overviewRuler } from './overviewRuler';

export const editorColors: EditorColors = {
  ...general,
  ...codeLens,
  ...lightbulb,
  ...bracketPairs,
  ...overviewRuler,
  ...gutter,
  ...commentsWidget
}
