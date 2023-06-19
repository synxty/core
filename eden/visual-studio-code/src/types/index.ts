import { ActionColors } from './ActionColors';
import { ActivityBar } from './ActivityBar';
import { BaseColors } from './BaseColors';
import { ButtonControl } from './ButtonControl';
import { EditorColors } from './EditorColors';
import { EditorGroupsAndTabs } from './EditorGroupsAndTabs';
import { SideBar } from './SideBar';
import { StatusBarColors } from './StatusBarColors';
import { TitleBar } from './TitleBar';
import { WindowBorder } from './WindowBorder';

export type ParseThemeColors<TC extends readonly string[]> = Partial<{ [K in TC[number]]: string }>;

export type * from './ActionColors';
export type * from './ActivityBar';
export type * from './BaseColors';
export type * from './ButtonControl';
export type * from './EditorColors';
export type * from './EditorGroupsAndTabs';
export type * from './SideBar';
export type * from './StatusBarColors';
export type * from './TitleBar';
export type * from './WindowBorder';

export type ThemeColors = 
  ActivityBar | 
  EditorColors | 
  SideBar | 
  WindowBorder |
  TitleBar |
  EditorGroupsAndTabs |
  BaseColors |
  ActionColors |
  ButtonControl |
  StatusBarColors
;

export type TokenColors = [];

export type Theme = {
  name: string;
  colors: ThemeColors;
  tokenColors: TokenColors;
}
