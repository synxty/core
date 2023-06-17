import { activityBar } from './activityBar';
import { editorColors } from './editorColors';
import { sideBar } from './sideBar';
import { titleBar } from './titleBar';
import { windowBorder } from './windowBorder';

export default {
  ...activityBar,
  ...editorColors,
  ...sideBar,
  ...windowBorder,
  ...titleBar
}