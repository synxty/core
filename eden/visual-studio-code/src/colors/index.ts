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
};

export default themeColors;
