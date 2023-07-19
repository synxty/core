import { ActionColors } from './ActionColors/index.ts';
import { ActivityBar } from './ActivityBar/index.ts';
import { Badge } from './Badge/index.ts';
import { BannerColors } from './BannerColors/index.ts';
import { BaseColors } from './BaseColors/index.ts';
import { BreadcrumbsColors } from './BreadcrumbsColors/index.ts';
import { ButtonControl } from './ButtonControl/index.ts';
import { ChatColors } from './ChatColors/index.ts';
import { CommandCenterColors } from './CommandCenterColors/index.ts';
import { DebugColors } from './DebugColors/index.ts';
import { DebugIconsColors } from './DebugIconsColors/index.ts';
import { DiffEditorColors } from './DiffEditorColors/index.ts';
import { DropdownControl } from './DropdownControl/index.ts';
import { EditorColors } from './EditorColors/index.ts';
import { EditorGroupsAndTabs } from './EditorGroupsAndTabs/index.ts';
import { EditorWidgetColors } from './EditorWidgetColors/index.ts';
import { ExtensionsColors } from './ExtensionsColors/index.ts';
import { GitColors } from './GitColors/index.ts';
import { InlineChatColors } from './InlineChatColors/index.ts';
import { InputControl } from './InputControl/index.ts';
import { IntegratedTerminalColors } from './IntegratedTerminalColors/index.ts';
import { KeybindingLabelColors } from './KeybindingLabelColors/index.ts';
import { KeyboardShortcutTableColors } from './KeyboardShortcutTableColors/index.ts';
import { ListsAndTrees } from './ListsAndTrees/index.ts';
import { MergeConflictsColors } from './MergeConflictsColors/index.ts';
import { Minimap } from './Minimap/index.ts';
import { NotebookColors } from './NotebookColors/index.ts';
import { NotificationColors } from './NotificationColors/index.ts';
import { PanelColors } from './PanelColors/index.ts';
import { PeekViewColors } from './PeekViewColors/index.ts';
import { Profiles } from './Profiles/index.ts';
import { ProgressBar } from './ProgressBar/index.ts';
import { QuickPickerColors } from './QuickPickerColors/index.ts';
import { ScrollbarControl } from './ScrollbarControl/index.ts';
import { SettingsEditorColors } from './SettingsEditorColors/index.ts';
import { SideBar } from './SideBar/index.ts';
import { SourceControlColors } from './SourceControlColors/index.ts';
import { StatusBarColors } from './StatusBarColors/index.ts';
import { SymbolIconsColors } from './SymbolIconsColors/index.ts';
import { TestingColors } from './TestingColors/index.ts';
import { TextColors } from './TextColors/index.ts';
import { TitleBar } from './TitleBar/index.ts';
import { WelcomePageColors } from './WelcomePageColors/index.ts';
import { WindowBorder } from './WindowBorder/index.ts';

export type ParseThemeColors<TC extends readonly string[]> = Partial<{ [K in TC[number]]: string }>;

export type * from './ActionColors/index.ts';
export type * from './ActivityBar/index.ts';
export type * from './Badge/index.ts';
export type * from './BannerColors/index.ts';
export type * from './BaseColors/index.ts';
export type * from './BreadcrumbsColors/index.ts';
export type * from './ButtonControl/index.ts';
export type * from './ChatColors/index.ts';
export type * from './CommandCenterColors/index.ts';
export type * from './DebugColors/index.ts';
export type * from './DebugIconsColors/index.ts';
export type * from './DiffEditorColors/index.ts';
export type * from './DropdownControl/index.ts';
export type * from './EditorColors/index.ts';
export type * from './EditorGroupsAndTabs/index.ts';
export type * from './EditorWidgetColors/index.ts';
export type * from './ExtensionsColors/index.ts';
export type * from './GitColors/index.ts';
export type * from './InlineChatColors/index.ts';
export type * from './InputControl/index.ts';
export type * from './IntegratedTerminalColors/index.ts';
export type * from './KeybindingLabelColors/index.ts';
export type * from './KeyboardShortcutTableColors/index.ts';
export type * from './ListsAndTrees/index.ts';
export type * from './MergeConflictsColors/index.ts';
export type * from './Minimap/index.ts';
export type * from './NotebookColors/index.ts';
export type * from './NotificationColors/index.ts';
export type * from './PanelColors/index.ts';
export type * from './PeekViewColors/index.ts';
export type * from './Profiles/index.ts';
export type * from './ProgressBar/index.ts';
export type * from './QuickPickerColors/index.ts';
export type * from './ScrollbarControl/index.ts';
export type * from './SettingsEditorColors/index.ts';
export type * from './SideBar/index.ts';
export type * from './SourceControlColors/index.ts';
export type * from './StatusBarColors/index.ts';
export type * from './SymbolIconsColors/index.ts';
export type * from './TestingColors/index.ts';
export type * from './TextColors/index.ts';
export type * from './TitleBar/index.ts';
export type * from './WelcomePageColors/index.ts';
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
  | Profiles
  | Minimap
  | DiffEditorColors
  | ChatColors
  | EditorWidgetColors
  | PeekViewColors
  | MergeConflictsColors
  | InlineChatColors
  | PanelColors
  | CommandCenterColors
  | NotificationColors
  | BannerColors
  | ExtensionsColors
  | QuickPickerColors
  | KeybindingLabelColors
  | KeyboardShortcutTableColors
  | IntegratedTerminalColors
  | DebugColors
  | TestingColors
  | WelcomePageColors
  | SourceControlColors
  | GitColors
  | SettingsEditorColors
  | BreadcrumbsColors
  | SymbolIconsColors
  | DebugIconsColors
  | NotebookColors;

export type TokenColors = [];

export type Theme = {
  $schema: string;
  name: string;
  colors: ThemeColors;
  tokenColors: TokenColors;
};
