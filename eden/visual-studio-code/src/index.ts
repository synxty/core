import { activityBar } from './activityBar';
import { editorColors } from './editorColors';
import { sideBar } from './sideBar';
import { template } from './template';

export default {
  ...template,
  colors: {
    ...editorColors,
    ...sideBar,
    ...activityBar
  }
}