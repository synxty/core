import { colors } from '@synxty/design-tokens';
import { EditorGroups } from '../../types';
import { TESTING } from '../../constants';

const { black, white } = colors;

export const editorGroups: EditorGroups = {
  "editorGroup.border": black.tint[30],
  "editorGroup.dropBackground": `${black.tint[30]}BF`,
  "editorGroupHeader.noTabsBackground": black.tint[30],
  "editorGroupHeader.tabsBackground": black.tint[30],
  "editorGroupHeader.tabsBorder": black.tint[20],
  "editorGroupHeader.border": black.tint[20],
  "editorGroup.emptyBackground": black.tint[20],
  "editorGroup.focusedEmptyBorder": TESTING,
  "editorGroup.dropIntoPromptBackground": black.tint[30],
  "editorGroup.dropIntoPromptBorder": black.tint[20],
  "editorGroup.dropIntoPromptForeground": white.shade[10],
};
