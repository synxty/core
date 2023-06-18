import { ThemeColors } from '../types';
import { actionColors } from './actionColors';
import { activityBar } from './activityBar';
import { baseColors } from './baseColors';
import { buttonControl } from './buttonControl';
import { editorColors } from './editorColors';
import { editorGroupsAndTabs } from './editorGroupsAndTabs';
import { sideBar } from './sideBar';
import { titleBar } from './titleBar';
import { windowBorder } from './windowBorder';

const themeColors: ThemeColors = {
  ...activityBar,
  ...editorColors,
  ...sideBar,
  ...windowBorder,
  ...titleBar,
  ...editorGroupsAndTabs,
  ...baseColors,
  ...actionColors,
  ...buttonControl
}

export default themeColors;
