import { ActivityBar } from './ActivityBar';
import { BaseColors } from './BaseColors';
import { EditorColors } from './EditorColors';
import { EditorGroupsAndTabs } from './EditorGroupsAndTabs';
import { SideBar } from './SideBar';
import { TitleBar } from './TitleBar';
import { WindowBorder } from './WindowBorder';

export type ParseThemeColors<TC extends readonly string[]> = Partial<{ [K in TC[number]]: string }>;

export type * from './ActivityBar';
export type * from './BaseColors';
export type * from './EditorColors';
export type * from './EditorGroupsAndTabs';
export type * from './SideBar';
export type * from './TitleBar';
export type * from './WindowBorder';

export type ThemeColors = 
  ActivityBar | 
  EditorColors | 
  SideBar | 
  WindowBorder |
  TitleBar |
  EditorGroupsAndTabs |
  BaseColors
;

export type TokenColors = [];

export type Theme = {
  name: string;
  colors: ThemeColors;
  tokenColors: TokenColors;
}
