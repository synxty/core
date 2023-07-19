import { colors } from '@synxty/design-tokens';
import { TESTING } from 'constants/index.ts';
import { EditorGroups } from 'types/index.ts';

const { black, white } = colors;

export const editorGroups: EditorGroups = {
  'editorGroup.border': black.tint[30],
  'editorGroup.dropBackground': `${black.tint[30]}BF`,
  'editorGroupHeader.noTabsBackground': black.tint[30],
  'editorGroupHeader.tabsBackground': black.tint[30],
  'editorGroupHeader.tabsBorder': black.tint[20],
  'editorGroupHeader.border': black.tint[20],
  'editorGroup.emptyBackground': black.tint[20],
  'editorGroup.focusedEmptyBorder': TESTING,
  'editorGroup.dropIntoPromptBackground': black.tint[30],
  'editorGroup.dropIntoPromptBorder': black.tint[10],
  'editorGroup.dropIntoPromptForeground': white.shade[10],
  'editorPane.background': black.tint[20],
  'sideBySideEditor.horizontalBorder': TESTING,
  'sideBySideEditor.verticalBorder': TESTING,
};
