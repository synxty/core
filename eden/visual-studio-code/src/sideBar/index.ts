import { colors } from '@synxty/design-tokens';
import { SideBar } from '../types/SideBar';
import { TESTING } from '../constants';

const { black, white } = colors;

export const sideBar: SideBar = {
  "sideBar.background": black.tint[30],
  "sideBar.foreground": white.shade[10],
  "sideBar.border": black.tint[20],
  "sideBar.dropBackground": TESTING,
  "sideBarTitle.foreground": white.shade[10],
  "sideBarSectionHeader.background": black.tint[40],
  "sideBarSectionHeader.foreground": white.shade[10],
  "sideBarSectionHeader.border": black.tint[30]
};