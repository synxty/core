import { EditorGroupsAndTabs } from '../../types';
import { editorGroups } from './editorGroups';
import { tabs } from './tabs';

export const editorGroupsAndTabs: EditorGroupsAndTabs = {
  ...editorGroups,
  ...tabs
}
