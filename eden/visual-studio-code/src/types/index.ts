import { ActivityBar } from './ActivityBar';
import { EditorColors } from './EditorColors';
import { SideBar } from './SideBar';
import { WindowBorder } from './WindowBorder';

export type * from './EditorColors';
export type * from './ActivityBar';
export type * from './SideBar';
export type * from './WindowBorder';

export type Colors = 
  ActivityBar | 
  EditorColors | 
  SideBar | 
  WindowBorder
;

export type TokenColors = [];

export type Theme = {
  name: string;
  colors: Colors;
  tokenColors: TokenColors;
}
