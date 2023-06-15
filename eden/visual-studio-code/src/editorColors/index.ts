import { EditorColors } from '../types';
import { bracketPairs } from './bracketPairs';
import { codeLens } from './codeLens';
import { general } from './general';
import { lightbulb } from './lightbulb';
import { overviewRuler } from './overviewRuler';

export const editorColors: EditorColors = {
  ...general,
  ...codeLens,
  ...lightbulb,
  ...bracketPairs,
  ...overviewRuler
}
