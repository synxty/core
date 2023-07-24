import { ParseThemeKeys } from 'types/index.ts';

const notificationColorsProps = [
  'notificationCenter.border',
  'notificationCenterHeader.foreground',
  'notificationCenterHeader.background',
  'notificationToast.border',
  'notifications.foreground',
  'notifications.background',
  'notifications.border',
  'notificationLink.foreground',
  'notificationsErrorIcon.foreground',
  'notificationsWarningIcon.foreground',
  'notificationsInfoIcon.foreground',
] as const;

export type NotificationColors = ParseThemeKeys<typeof notificationColorsProps>;
