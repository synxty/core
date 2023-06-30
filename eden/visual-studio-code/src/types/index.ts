import { ActionColors } from './ActionColors/index.ts';
import { ActivityBar } from './ActivityBar/index.ts';
import { Badge } from './Badge/index.ts';
import { BaseColors } from './BaseColors/index.ts';
import { ButtonControl } from './ButtonControl/index.ts';
import { DropdownControl } from './DropdownControl/index.ts';
import { EditorColors } from './EditorColors/index.ts';
import { EditorGroupsAndTabs } from './EditorGroupsAndTabs/index.ts';
import { InputControl } from './InputControl/index.ts';
import { ListsAndTrees } from './ListsAndTrees/index.ts';
import { Profiles } from './Profiles/index.ts';
import { ProgressBar } from './ProgressBar/index.ts';
import { ScrollbarControl } from './ScrollbarControl/index.ts';
import { SideBar } from './SideBar/index.ts';
import { StatusBarColors } from './StatusBarColors/index.ts';
import { TextColors } from './TextColors/index.ts';
import { TitleBar } from './TitleBar/index.ts';
import { WindowBorder } from './WindowBorder/index.ts';

export type ParseThemeColors<TC extends readonly string[]> = Partial<{ [K in TC[number]]: string }>;

export type * from './ActionColors/index.ts';
export type * from './ActivityBar/index.ts';
export type * from './Badge/index.ts';
export type * from './BaseColors/index.ts';
export type * from './ButtonControl/index.ts';
export type * from './DropdownControl/index.ts';
export type * from './EditorColors/index.ts';
export type * from './EditorGroupsAndTabs/index.ts';
export type * from './InputControl/index.ts';
export type * from './ListsAndTrees/index.ts';
export type * from './Profiles/index.ts';
export type * from './ProgressBar/index.ts';
export type * from './ScrollbarControl/index.ts';
export type * from './SideBar/index.ts';
export type * from './StatusBarColors/index.ts';
export type * from './TextColors/index.ts';
export type * from './TitleBar/index.ts';
export type * from './WindowBorder/index.ts';

export type ThemeColors =
  | ActivityBar
  | EditorColors
  | SideBar
  | WindowBorder
  | TitleBar
  | EditorGroupsAndTabs
  | BaseColors
  | ActionColors
  | ButtonControl
  | StatusBarColors
  | DropdownControl
  | InputControl
  | ScrollbarControl
  | Badge
  | ProgressBar
  | ListsAndTrees
  | TextColors
  | Profiles;

export type TokenColors = [];

export type Theme = {
  name: string;
  colors: ThemeColors;
  tokenColors: TokenColors;
};
