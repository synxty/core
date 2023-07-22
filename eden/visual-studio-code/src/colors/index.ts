import { ThemeColors } from 'types/index.ts';
import { actionColors } from './actionColors/index.ts';
import { activityBar } from './activityBar/index.ts';
import { baseColors } from './baseColors/index.ts';
import { buttonControl } from './buttonControl/index.ts';
import { dropdownControl } from './dropdownControl/index.ts';
import { editorColors } from './editorColors/index.ts';
import { editorGroupsAndTabs } from './editorGroupsAndTabs/index.ts';
import { inputControl } from './inputControl/index.ts';
import { sideBar } from './sideBar/index.ts';
import { statusBarColors } from './statusBarColors/index.ts';
import { titleBar } from './titleBar/index.ts';
import { windowBorder } from './windowBorder/index.ts';
import { scrollbarControl } from './scrollbarControl/index.ts';
import { badge } from './badge/index.ts';
import { progressBar } from './progressBar/index.ts';
import { listsAndTrees } from './listsAndTrees/index.ts';
import { textColors } from './textColors/index.ts';
import { profiles } from './profiles/index.ts';
import { minimap } from './minimap/index.ts';
import { diffEditorColors } from './diffEditorColors/index.ts';
import { chatColors } from './chatColors/index.ts';
import { editorWidgetColors } from './editorWidgetColors/index.ts';
import { peekViewColors } from './peekViewColors/index.ts';
import { mergeConflictsColors } from './mergeConflictsColors/index.ts';
import { inlineChatColors } from './inlineChatColors/index.ts';
import { panelColors } from './panelColors/index.ts';
import { commandCenterColors } from './commandCenterColors/index.ts';
import { notificationColors } from './notificationColors/index.ts';
import { bannerColors } from './bannerColors/index.ts';
import { extensionsColors } from './extensionsColors/index.ts';
import { quickPickerColors } from './quickPickerColors/index.ts';
import { keybindingLabelColors } from './keybindingLabelColors/index.ts';
import { keyboardShortcutTableColors } from './keyboardShortcutTableColors/index.ts';
import { integratedTerminalColors } from './integratedTerminalColors/index.ts';
import { debugColors } from './debugColors/index.ts';
import { testingColors } from './testingColors/index.ts';
import { welcomePageColors } from './welcomePageColors/index.ts';
import { sourceControlColors } from './sourceControlColors/index.ts';
import { gitColors } from './gitColors/index.ts';
import { settingsEditorColors } from './settingsEditorColors/index.ts';
import { breadcrumbsColors } from './breadcrumbsColors/index.ts';
import { symbolIconsColors } from './symbolIconsColors/index.ts';
import { debugIconsColors } from './debugIconsColors/index.ts';
import { notebookColors } from './notebookColors/index.ts';
import { chartColors } from './chartColors/index.ts';

const themeColors: ThemeColors = {
  ...activityBar,
  ...editorColors,
  ...sideBar,
  ...windowBorder,
  ...titleBar,
  ...editorGroupsAndTabs,
  ...baseColors,
  ...actionColors,
  ...buttonControl,
  ...statusBarColors,
  ...dropdownControl,
  ...inputControl,
  ...scrollbarControl,
  ...badge,
  ...progressBar,
  ...listsAndTrees,
  ...textColors,
  ...profiles,
  ...minimap,
  ...diffEditorColors,
  ...chatColors,
  ...editorWidgetColors,
  ...peekViewColors,
  ...mergeConflictsColors,
  ...inlineChatColors,
  ...panelColors,
  ...commandCenterColors,
  ...notificationColors,
  ...bannerColors,
  ...extensionsColors,
  ...quickPickerColors,
  ...keybindingLabelColors,
  ...keyboardShortcutTableColors,
  ...integratedTerminalColors,
  ...debugColors,
  ...testingColors,
  ...welcomePageColors,
  ...sourceControlColors,
  ...gitColors,
  ...settingsEditorColors,
  ...breadcrumbsColors,
  ...symbolIconsColors,
  ...debugIconsColors,
  ...notebookColors,
  ...chartColors,
};

export default themeColors;
