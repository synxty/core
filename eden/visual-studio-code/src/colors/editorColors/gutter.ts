import { aliases, colors } from '@synxty/design-tokens';
import { TESTING } from '../../constants';
import { Gutter } from '../../types';

const { info, success, danger } = aliases;
const { black } = colors;

export const gutter: Gutter = {
  "editorGutter.background": black.tint[20],
  "editorGutter.modifiedBackground": info.DEFAULT,
  "editorGutter.addedBackground": success.DEFAULT,
  "editorGutter.deletedBackground": danger.DEFAULT,
  "editorGutter.commentRangeForeground": TESTING,
  "editorGutter.commentGlyphForeground": TESTING,
  "editorGutter.commentUnresolvedGlyphForeground": TESTING,
  "editorGutter.foldingControlForeground": black.tint[90]
};
