import { ParseThemeColors } from '..';

const inputControlProps = [
  "input.background",
  "input.border",
  "input.foreground",
  "input.placeholderForeground",
  "inputOption.activeBackground",
  "inputOption.activeBorder",
  "inputOption.activeForeground",
  "inputOption.hoverBackground",
  "inputValidation.errorBackground",
  "inputValidation.errorForeground",
  "inputValidation.errorBorder",
  "inputValidation.infoBackground",
  "inputValidation.infoForeground",
  "inputValidation.infoBorder",
  "inputValidation.warningBackground",
  "inputValidation.warningForeground",
  "inputValidation.warningBorder"
] as const;

export type InputControl = ParseThemeColors<typeof inputControlProps>