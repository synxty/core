import { ParseThemeColors } from 'types/index.ts';

const editorGroupsProps = [
  "editorGroup.border",
  "editorGroup.dropBackground",
  "editorGroupHeader.noTabsBackground",
  "editorGroupHeader.tabsBackground",
  "editorGroupHeader.tabsBorder",
  "editorGroupHeader.border",
  "editorGroup.emptyBackground",
  "editorGroup.focusedEmptyBorder",
  "editorGroup.dropIntoPromptForeground",
  "editorGroup.dropIntoPromptBackground",
  "editorGroup.dropIntoPromptBorder",
  "editorPane.background",
  "sideBySideEditor.horizontalBorder",
  "sideBySideEditor.verticalBorder"
] as const;

export type EditorGroups = ParseThemeColors<typeof editorGroupsProps>;
