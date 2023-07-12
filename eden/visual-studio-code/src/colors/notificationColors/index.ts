import { aliases, colors } from '@synxty/design-tokens';
import { TESTING } from 'constants/index.ts';
import { NotificationColors } from 'types/index.ts';

const { black, white } = colors;
const { info, danger, warning } = aliases;

export const notificationColors: NotificationColors = {
  'notificationCenter.border': black.tint[10],
  'notificationCenterHeader.foreground': white.shade[10],
  'notificationCenterHeader.background': black.tint[30],
  'notificationToast.border': black.tint[10],
  'notifications.foreground': white.shade[70],
  'notifications.background': black.tint[30],
  'notifications.border': black.tint[10],
  'notificationLink.foreground': info.DEFAULT,
  'notificationsErrorIcon.foreground': danger.DEFAULT,
  'notificationsWarningIcon.foreground': warning.DEFAULT,
  'notificationsInfoIcon.foreground': info.DEFAULT,
};
