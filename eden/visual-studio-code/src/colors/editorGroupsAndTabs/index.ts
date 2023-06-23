import { EditorGroupsAndTabs } from 'types/index.ts';
import { editorGroups } from './editorGroups.ts';
import { tabs } from './tabs.ts';

export const editorGroupsAndTabs: EditorGroupsAndTabs = {
  ...editorGroups,
  ...tabs,
};
