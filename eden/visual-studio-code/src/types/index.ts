import { ActivityBar } from './ActivityBar';
import { EditorColors } from './EditorColors';
import { SideBar } from './SideBar';
import { TitleBar } from './TitleBar';
import { WindowBorder } from './WindowBorder';

export type * from './EditorColors';
export type * from './ActivityBar';
export type * from './SideBar';
export type * from './TitleBar';
export type * from './WindowBorder';

export type Colors = 
  ActivityBar | 
  EditorColors | 
  SideBar | 
  WindowBorder |
  TitleBar
;

export type TokenColors = [];

export type Theme = {
  name: string;
  colors: Colors;
  tokenColors: TokenColors;
}
